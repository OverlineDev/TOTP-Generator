# Web-Based TOTP Authenticator

**Current Version: 1.1.0**

**Standards:** RFC 6238 (TOTP), RFC 4226 (HOTP), Base32
**Works with:** GitHub, Google, Microsoft, AWS, Cloudflare, and other RFC 6238-compatible services.

## 🔐 What This Is

This is a simple, client-side TOTP authenticator that runs entirely in your browser.

TOTP codes are generated locally using your secret keys. Your secrets are not intentionally sent to a server, and no backend is required.

The project works both as a hosted web application and as a standalone HTML file that can be downloaded and used offline.

## ✨ Features

* Multiple TOTP accounts
* Account names
* Account notes
* Add, edit, and delete accounts
* 6-digit TOTP codes
* RFC 6238-compatible TOTP generation
* Base32 secret key support
* 30-second countdown
* Copy TOTP codes
* JSON backup export
* JSON backup import
* Backup validation
* Import and merge accounts
* No backend required
* Works offline
* Single-file application
* Open source under the MIT License

## 🚀 Usage

Open `index.html` in any modern browser.

### Add an Account

1. Click **Add Account**.
2. Enter an account name.
3. Enter the Base32 TOTP secret key.
4. Optionally add notes.
5. Click **Save**.

The authenticator will automatically generate a new 6-digit code every 30 seconds.

Example Base32 secret:

```text
JBSWY3DPEHPK3PXP
```

### Editing Accounts

Use the **Edit** button on an account to change its name, secret key, or notes.

### Copying Codes

Use the **Copy** button to copy the current TOTP code to your clipboard.

## 💾 Backups

You can export your accounts using **Export Backup**.

Backups are stored as JSON files and contain the account name, TOTP secret key, and notes.

Example:

```json
{
    "name": "GitHub",
    "key": "YOUR_BASE32_SECRET",
    "notes": "My GitHub account"
}
```

The complete backup also includes application and version information.

### Importing Backups

Use **Import Backup** to restore accounts from a previously exported JSON file.

When importing a backup, you can choose to:

* Replace your current accounts
* Merge the imported accounts with your existing accounts

Imported backups are validated before being added.

### ⚠️ Backup Security

Backup files contain your actual TOTP secret keys.

**Treat backup files like passwords.**

Do not:

* Upload real backups to GitHub
* Share backups with other people
* Upload backups to untrusted websites
* Store backups somewhere you do not trust

Backups are **not encrypted** in the current version.

## 📴 Offline Use

The application can be downloaded and opened directly as an HTML file.

No internet connection or backend server is required to generate TOTP codes.

This also means you can keep a local copy of the application and use it offline.

## 🛡️ Security Notes

This project is designed to process TOTP secrets locally in your browser.

* No backend is required.
* Secrets are not intentionally transmitted by the application.
* Never commit real TOTP secrets to GitHub.
* Treat exported backup files as sensitive.
* Keep your backup files secure.
* For important production accounts, consider using a trusted authenticator or password manager.

This project does not currently provide encryption for exported TOTP secrets.

## 📋 Standards

This project uses:

* **RFC 6238** — Time-Based One-Time Password (TOTP)
* **RFC 4226** — HMAC-Based One-Time Password (HOTP)
* **Base32** — Used for TOTP secret keys

## 📄 License

This project is licensed under the MIT License.

See [`LICENSE`](LICENSE) for the full license text.

## 🗺️ Future Ideas

Possible future improvements include:

* Persistent local storage
* `otpauth://` URI support
* QR code importing
* Additional privacy and security improvements
* Progressive Web App support

---

**Version:** 1.1.0
**Status:** Stable
