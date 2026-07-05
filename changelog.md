# Changelog

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
