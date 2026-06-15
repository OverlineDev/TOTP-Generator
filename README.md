Project: Web‑Based TOTP Generator
Standards: RFC 6238 (TOTP), RFC 4226 (HOTP), Base32
Works with: GitHub, Google, Microsoft, AWS, Cloudflare, etc.

🔐 What This Is
This is a simple, client‑side TOTP generator that runs entirely in your browser.
It never sends secrets anywhere — everything stays local.

✨ Features
Generates 6‑digit TOTP codes

Compatible with GitHub, Google, Microsoft, and any RFC‑6238 service

Base32 secret input

30‑second countdown

No backend required

Works offline

🚀 Usage
Open index.html in any browser.

Paste your Base32 secret (example: JBSWY3DPEHPK3PXP).

The page will automatically generate a new TOTP code every 30 seconds.

🛡️ Security Notes
This tool is for personal use.

Never commit real secrets to GitHub.

Use a password manager or authenticator app for production accounts.
