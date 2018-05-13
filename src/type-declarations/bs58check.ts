declare module 'bs58check' {
  export function decode(str: string): Buffer;
  export function encode(buf: Buffer): string;
}
