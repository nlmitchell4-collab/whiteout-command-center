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
