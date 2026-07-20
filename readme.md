# Whiteout Foundry Command Center

Command center for planning and reviewing Whiteout Survival Foundry assignments.

## Current Features

- Foundry battlefield map with phase-based objective priorities.
- Chief/combatant selector with conditional Legion context.
- Screenshot import flow powered by OCR.
- Review panel for correcting parsed or existing combatants before saving.
- Assignment choices for Legion 1, Legion 2, or No engagement.
- Searchable Battlefield combatant selector.
- Legion assignment engine that narrows each combatant to nearby high-priority objective clusters.
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

## Automatic Deployment

Commits pushed to `master` run the GitHub Actions workflow in `.github/workflows/firebase-hosting.yml`.
The workflow installs dependencies, builds the Vite app, and deploys `dist/` to Firebase Hosting with the Firebase CLI.

Add these GitHub repository secrets before relying on automatic deploys:

- `FIREBASE_SERVICE_ACCOUNT_WOS_COMMAND_CENTER`
- `VITE_ADMIN_PASSWORD`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Environment

Copy `.env.example` to `.env` and fill in local values.

Production combatant data persists in Firestore at `commandData/combatants`.
Deploying the frontend does not overwrite that Firestore document.

If Firebase values are blank during local development, the app uses bundled local data files under `data/`. Local saves without Firebase are in-memory only and are intended for testing.

After changing `.env`, restart the Vite dev server. For production, rebuild and redeploy because Vite injects `VITE_` environment variables at build time.

## Version

Current version: `1.0.7`
