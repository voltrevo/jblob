import * as bs58check from 'bs58check';
import * as msgpack from 'msgpack-lite';

export function encode(obj: {}) {
  return bs58check.encode(msgpack.encode(obj));
}

export function decode(str: string) {
  return msgpack.decode(bs58check.decode(str));
}
