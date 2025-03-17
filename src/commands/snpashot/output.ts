import fs from 'fs';
import net from 'net';
import { Writable } from 'stream';
import { logger } from '../../logger';

export type CreateOutputStreamOptions = {
  path: string;
};

export async function createOutputStream(opts: CreateOutputStreamOptions): Promise<Writable> {
  const path = opts.path.trim() || '-';
  if (path === '-') {
    return process.stdout;
  } else if (path.endsWith('.sock')) {
    return SocketWritableStream.create(path);
  } else {
    return fs.createWriteStream(path);
  }
}

class SocketWritableStream extends Writable {
  private connected: Promise<boolean>;
  private socket: net.Socket | null = null;
  private isConnected: boolean = false;
  private isPromiseSettled: boolean = false;

  static async create(socketFilePath: string) {
    const stream = new SocketWritableStream(socketFilePath, {});
    await stream.connected;
    return stream;
  }

  private constructor(socketFilePath: string, options = {}) {
    super({ ...options });

    this.connected = new Promise((resolve, reject) => {
      this.socket = net.createConnection(socketFilePath, () => {
        this.isConnected = true;
        this.isPromiseSettled = true;
        resolve(true);
      });

      this.socket.on('error', (err) => {
        logger.error('socket connection error', err);
        this.isConnected = false;

        if (!this.isPromiseSettled) {
          this.isPromiseSettled = true;
          resolve(false);
        } else {
          this.destroy(err);
        }
      });

      this.socket.once('close', () => {
        logger.info('socket connection closed');
        this.isConnected = false;
      });
    });
  }

  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void) {
    if (!this.isConnected || !this.socket) {
      callback(new Error('socket is not connected'));
      return;
    }

    if (typeof chunk !== 'string' && !Buffer.isBuffer(chunk)) {
      chunk = Buffer.from(chunk);
    }

    this.socket.write(chunk, encoding, callback);
  }

  _final(callback: (error?: Error | null) => void) {
    if (this.socket) {
      this.socket.end(() => {
        this.isConnected = false;
        callback();
      });
    } else {
      callback();
    }
  }

  _destroy(error: Error | null, callback: (error?: Error | null) => void) {
    if (this.socket) {
      this.socket.destroy();
      this.isConnected = false;
    }
    callback(error);
  }
}
