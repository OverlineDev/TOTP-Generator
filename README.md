# Web-Based TOTP Authenticator

**Current Version:** 1.0.0
**Development:** 1.1.0

**Standards:** RFC 6238 (TOTP), RFC 4226 (HOTP), Base32
**Works with:** GitHub, Google, Microsoft, AWS, Cloudflare, and other RFC 6238-compatible services.

## 🔐 What This Is

This is a simple, client-side TOTP authenticator that runs entirely in your browser.

It generates your TOTP codes locally using your secret key. **Your secrets are never sent to a server.**

The project is designed to work both as a hosted web application and as a standalone HTML file that can be downloaded and used offline.

## ✨ Features

* Generates 6-digit TOTP codes
* RFC 6238-compatible TOTP generation
* Base32 secret key support
* 30-second countdown
* Client-side generation
* No backend required
* Works offline
* Single-file application
* Open source under the MIT License

## 🚧 Development — Version 1.1.0

Version 1.1.0 is currently being developed on the `Development` branch.

Planned features include:

* Multiple TOTP accounts
* Account names
* Account notes
* Add, edit, and delete accounts
* Copy TOTP codes
* JSON backup export
* JSON backup import
* Backup validation

### Backup Format

Backups will contain account information in JSON format, including:

```json
{
    "name": "GitHub",
    "key": "YOUR_BASE32_SECRET",
    "notes": "My GitHub account"
}
```

**Important:** Backup files contain your TOTP secret keys and should be treated as sensitive information. Never upload real backups to GitHub or share them with other people.

## 🚀 Usage

### Current Version

Open `index.html` in any modern browser.

Enter your Base32 TOTP secret key, for example:

```text
JBSWY3DPEHPK3PXP
```

The page will automatically generate a new TOTP code every 30 seconds.

### Offline Use

You can download `index.html` and open it directly on your computer.

No server or internet connection is required to generate TOTP codes.

## 🛡️ Security Notes

This project is intended for personal use.

* Never commit real TOTP secret keys to GitHub.
* Never share your TOTP secret keys publicly.
* Treat exported backup files as sensitive.
* Use a password manager or trusted authenticator application for important production accounts.
* This project does not currently encrypt stored or exported TOTP secrets.

TOTP secrets are processed locally in your browser and are not intentionally transmitted to a server by this application.

## 📄 License

This project is licensed under the MIT License.

See [`LICENSE`](LICENSE) for the full license text.

## 🗺️ Roadmap

### 1.0.0 — Current Stable Version

* Single TOTP secret
* 6-digit TOTP generation
* Base32 support
* 30-second countdown
* Offline support

### 1.1.0 — Development

* Multiple accounts
* Account management
* Notes
* JSON backup and restore

### Future

Potential future features may include:

* Persistent local storage
* `otpauth://` URI support
* QR code importing
* Additional security and privacy improvements
* Progressive Web App support
