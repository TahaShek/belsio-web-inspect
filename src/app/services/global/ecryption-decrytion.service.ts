import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EcryptionDecrytionService {

  constructor() { }
  private secretKey = "YourSecretKey123"; // 16 characters = 128 bits
  private iv = "RandomIV12345123"; // Ensure this is secured and potentially dynamic

  encrypt(data: any) {
    const dataToString=JSON.stringify(data);
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const iv = CryptoJS.enc.Utf8.parse(this.iv);
    const encrypted = CryptoJS.AES.encrypt(dataToString, key, { iv: iv });
    return encrypted.toString();
  }
  decrypt(ciphertext: string): string {
  const key = CryptoJS.enc.Utf8.parse(this.secretKey);
  const iv = CryptoJS.enc.Utf8.parse(this.iv);
  const decrypted = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
}
