# Marshall Bailey by Cyber Grants Alliance

Bailey is a golden doodle guard dog who barks before you type your Microsoft 365 password into a fake sign in page.

Marshall Bailey by Cyber Grants Alliance is a no cost Chrome extension from [Cyber Grants Alliance](https://www.cybergrantsalliance.org/), a nonprofit that helps small businesses and community organizations protect themselves from cyber attacks.

**Marshall Bailey by Cyber Grants Alliance is based on [Check by CyberDrain](https://github.com/CyberDrain/Check) (AGPL 3.0).** It keeps Check's detection engine and changes the name, look, wording, and defaults.

## What it does

- Looks at every page that shows a Microsoft 365 style sign in form.
- If the page is not really Microsoft, Bailey blocks it and explains why.
- On the real Microsoft sign in page, Bailey shows a small "Real Microsoft sign in page" badge.

## Privacy

Detection runs inside your browser. Marshall Bailey does not collect browsing history, passwords, or anything you type, and it has no analytics.

The only network request it makes on its own is a download of the public detection rules file, so it keeps up with new scams:
`https://raw.githubusercontent.com/CyberDrain/Check/refs/heads/main/rules/detection-rules.json`.
If that download fails, the copy bundled in `rules/detection-rules.json` is used.

Changes from upstream that affect privacy:

- The `identity` and `identity.email` permissions are removed.
- The remote rogue OAuth app list is off by default.
- Material Icons are bundled in `fonts/` instead of loaded from Google Fonts.
- CIPP reporting and webhooks stay off unless an administrator turns them on.

## Install for testing

1. Open `chrome://extensions` and turn on Developer mode.
2. Click Load unpacked and pick this folder.
3. Serve `test-pages/` locally (for example `bunx serve test-pages`) and open `phishing-basic.html`. Bailey should block it.
4. Open `https://login.microsoftonline.com`. Bailey should show the green "Real Microsoft sign in page" badge and never block it.

Never test against a live phishing site and never type a real password into a test page.

## Package for the Chrome Web Store

```
bun scripts/package.ts
```

This writes `dist/marshall-bailey-by-cga-<version>.zip` with only the files the extension needs.

## License

GNU Affero General Public License 3.0. See `LICENSE`.

- Original work: Check by CyberDrain, https://github.com/CyberDrain/Check, copyright CyberDrain and contributors.
- Changes: copyright 2026 Cyber Grants Alliance.
- Material Icons font: Google, Apache License 2.0 (`fonts/LICENSE-MaterialIcons.txt`).
- Bailey mascot and icons: Cyber Grants Alliance.

Because the license is AGPL 3.0, the full source for every published version of Marshall Bailey is made available in this repository.
