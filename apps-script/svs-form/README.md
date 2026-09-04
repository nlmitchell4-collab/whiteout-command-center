# SVS Form Apps Script

This folder contains the source for the `SVS Form` Google Apps Script project.

## Project

- Script ID: `1WAhDRhVs1fUWZmsu_VsLNrgFwaQouO4uAWrKLGWznQULooUzMgHgn3gc`
- Local root: `apps-script/svs-form`

## Local Workflow

Authenticate once:

```powershell
npx.cmd clasp login
```

Pull the latest script source:

```powershell
npx.cmd clasp pull
```

Push local changes:

```powershell
npx.cmd clasp push
```

## GitHub Actions

The `Deploy SVS Form Apps Script` workflow pushes this folder to Google Apps Script when related files change on `master`.

Required repository secret:

- `CLASPRC_JSON`: contents of your local clasp OAuth file.

Optional repository secret:

- `SVS_FORM_DEPLOYMENT_ID`: existing Apps Script deployment ID. If provided, the workflow updates that deployment after pushing source.

Do not commit `.clasprc.json` or OAuth credentials.

## Re-authorizing Admin Scopes

The admin archive/reset action verifies the Google sign-in token with `UrlFetchApp.fetch()`. If Google reports a missing `script.external_request` permission after a manifest change:

1. Open the SVS Form Apps Script project.
2. Select `authorizeSvsAdminScopes` from the function dropdown.
3. Click Run and approve the requested Google permissions.
4. Re-run the `Deploy SVS Form Apps Script` workflow so the live web app deployment uses the latest manifest.
