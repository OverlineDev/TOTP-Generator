# Web-Based TOTP Authenticator

> 🚧 **Development Branch — Version 1.1.0**

This is the development branch of the Web-Based TOTP Authenticator.

The `main` branch contains the latest stable release. This branch contains features and changes currently being developed and tested for the upcoming **1.1.0** release.

## 🔐 What This Is

A simple, client-side TOTP authenticator that runs entirely in your browser.

TOTP codes are generated locally using the provided secret keys. The application does not require a backend to generate codes.

The project is designed to work both as a hosted website and as a standalone HTML file that can be downloaded and used offline.

## 🚧 Version 1.1.0 Development

### Account Management

* [x] Multiple TOTP accounts
* [x] Account names
* [x] Account notes
* [x] Add accounts
* [x] Edit accounts
* [x] Delete accounts
* [x] Copy TOTP codes

### Backups

* [x] JSON backup export
* [x] JSON backup import
* [x] Backup validation
* [x] Import as replacement
* [x] Import and merge accounts

### Testing

* [ ] Test multiple accounts with real TOTP services
* [ ] Test account editing
* [ ] Test account deletion
* [ ] Test backup export
* [ ] Test backup import
* [ ] Test merging backups
* [ ] Test replacing accounts from backups
* [ ] Test invalid/corrupted backup files
* [ ] Test downloaded HTML file offline
* [ ] Test mobile layout

## 📦 Backup Format

Backups use JSON and contain the account name, TOTP secret key, and optional notes.

Example:

```json
{
    "name": "GitHub",
    "key": "YOUR_BASE32_SECRET",
    "notes": "My GitHub account"
}
```

The complete backup file also contains application and version information.

### ⚠️ Important

Backup files contain your TOTP secret keys.

**Do not upload real backup files to GitHub, share them with other people, or store them somewhere you do not trust.**

The current 1.1.0 development version does **not** encrypt backup files.

## 🛡️ Security

This project processes TOTP secrets locally in the browser.

* No backend is required.
* Secrets are not intentionally sent to a server.
* Never commit real TOTP secrets to GitHub.
* Treat exported backup files as sensitive.
* Use a trusted authenticator or password manager for important production accounts.

## 📋 Standards

* RFC 6238 — Time-Based One-Time Password (TOTP)
* RFC 4226 — HMAC-Based One-Time Password (HOTP)
* Base32

## 📄 License

This project is licensed under the MIT License.

See [`LICENSE`](LICENSE) for the full license text.

## 🗺️ Future Ideas

These features are **not part of 1.1.0** and may be considered for future versions:

* Persistent local storage
* `otpauth://` URI support
* QR code importing
* Additional privacy and security improvements
* Progressive Web App support

---

**Current stable version:** 1.0.0
**Current development version:** 1.1.0
