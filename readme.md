# Whiteout Foundry Command Center

Command center for planning and reviewing Whiteout Survival Foundry assignments.

## Current Features

- Foundry battlefield map with phase-based objective priorities.
- Chief/combatant selector with conditional Legion context.
- Screenshot import flow powered by OCR.
- Review panel for correcting parsed or existing combatants before saving.
- Assignment choices for Legion 1, Legion 2, or No engagement.
- Firestore-first command data with local file fallback for testing.
- Local build output in `dist/` for Firebase Hosting.

## Local Development

```bash
npm install
npm run dev
```

On Windows PowerShell, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm.cmd run build
```

## Environment

Copy `.env.example` to `.env` and fill in local values.

If Firebase values are blank, the app uses bundled local data files under `data/`.

## Version

Current version: `1.1.3`
