// /lib/crypto.js

const ENC_VERSION = "v1";
const PBKDF2_ITERATIONS = 150000;
const KEY_LENGTH_BITS = 256;
const IV_LENGTH_BYTES = 12;

function strToBytes(str) {
  return new TextEncoder().encode(str);
}

function bytesToStr(bytes) {
  return new TextDecoder().decode(bytes);
}

function bytesToBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function base64ToBytes(b64) {
  return new Uint8Array(
    atob(b64).split("").map(c => c.charCodeAt(0))
  );
}

export function generateSaltBase64() {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return bytesToBase64(salt);
}

export async function deriveKeyFromPassword(password, saltBase64) {
  const salt = base64ToBytes(saltBase64);

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    strToBytes(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: KEY_LENGTH_BITS },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptSecret(secretPlaintext, aesKey) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH_BYTES));

  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      aesKey,
      strToBytes(secretPlaintext)
    )
  );

  return [
    ENC_VERSION,
    bytesToBase64(iv),
    bytesToBase64(ciphertext)
  ].join(":");
}

export async function decryptSecret(secretEncrypted, aesKey) {
  const [version, ivB64, ctB64] = secretEncrypted.split(":");
  if (version !== ENC_VERSION) throw new Error("Unsupported version");

  const iv = base64ToBytes(ivB64);
  const ciphertext = base64ToBytes(ctB64);

  const plaintextBytes = new Uint8Array(
    await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      aesKey,
      ciphertext
    )
  );

  return bytesToStr(plaintextBytes);
}
