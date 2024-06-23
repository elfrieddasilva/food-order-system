import { UUID as CryptoUUID, randomUUID } from 'crypto';
export type UUID = CryptoUUID;
export const generateUUID = () => {
  return randomUUID();
};
