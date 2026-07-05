# Changelog

## v1.2.10

- Added GitHub Actions secret validation before production builds.
- Enabled Firebase CLI debug output for automatic Hosting deploy failures.
- Passed Firebase service account credentials directly to the deploy step.

## v1.2.9

- Updated GitHub Actions checkout and setup-node actions to v5 to avoid Node.js 20 runtime deprecation warnings.

## v1.2.8

- Switched automatic Firebase Hosting deploys from the legacy hosting action to the Firebase CLI.
- Updated the deploy workflow to run on Node.js 24.

## v1.2.7

- Refreshed battlefield assignments immediately after combatant saves.
- Reset Foundry objective priorities by phase and moved Imperial Foundry to Phase 2 unlock.
- Locked weapon workshops until Phase 3 and updated phase assignment candidate lists.
- Weighted secondary and tertiary objectives more strongly by proximity, with bottom-10% combatants biased toward east-edge safe-zone objectives.

## v1.2.6

- Added a GitHub Actions workflow to build and deploy Firebase Hosting on pushes to `master`.
- Documented required GitHub Secrets for automatic Firebase deploys.

## v1.2.5

- Filtered commander battlefield assignment details by active legion.
- Lit objective tiles and objective cards from the active legion when no chief is selected.

## v1.2.4

- Added Firestore load/save timeouts for command data.
- Improved combatant save errors when Firebase is configured but unreachable or offline.

## v1.2.3

- Initialized navigation and the import UI before command data loading.
- Added a command data load timeout/fallback so slow Firebase reads cannot leave deployed navigation inert.

## v1.2.2

- Added non-secret Firebase configuration diagnostics that report missing environment variable names.
- Documented that Vite requires a dev-server restart or production rebuild after `.env` changes.

## v1.2.1

- Clarified production combatant persistence through Firestore.
- Added a production save guard so combatant edits cannot silently save only in memory when Firebase is not configured.
- Marked `data/combatants.js` as local fallback data for development and parser testing.

## v1.2.0

- Enhanced the Foundry assignment engine to generate about three primary objectives per combatant per phase.
- Scored objective clusters by building priority and map proximity.
- Distributed primary clusters across same-legion combatants by power-ranked roster order.

## v1.1.4

- Fixed Import review row alignment, including manually added combatants.
- Replaced native Chief datalist with a searchable roster dropdown.
- Expanded Legion 1 and Legion 2 combatant assignments into phase-aware Battlefield objective groups.

## v1.1.3

- Added Import page support for loading current combatants into the review editor.
- Added manual combatant row creation from the Import review panel.

## v1.1.2

- Replaced duplicate Battlefield Legion controls with a single conditional Legion context control.

## v1.1.1

- Fixed Legion assignment precedence so row Join/Substitute actions override noisy dispatched-status OCR.
- Widened the row action OCR crop to better capture right-side Join/Substitute labels.

## v1.1.0

- Added Firestore-first command data loading with local fallback.
- Added combatants as managed command data.
- Added OCR screenshot import for Foundry combatant screenshots.
- Added parsed combatant review/edit panel before saving.
- Added Legion 1, Legion 2, and No engagement assignment choices.
- Improved power parsing with tighter numeric OCR crops.
- Excluded No engagement rows from battlefield assignment cards.
- Wired reviewed combatant data into Battlefield assignments.
- Added conditional Battlefield Legion selector/identifier.
- Rebuilt production `dist` assets.

## v0.1.13

- Added assignment generator foundation.

## v0.1.12

- Added battlefield styling.
- Added background map support.

## v0.1.11

- Added battlefield coordinates.
- Added objective unlock system.
- Added assignment highlighting.
- Added chief selector.
- Added summary panel.
- Added My Objectives panel.
