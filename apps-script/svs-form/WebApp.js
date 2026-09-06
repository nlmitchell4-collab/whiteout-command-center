function doGet(
  e
) {

  const view =
    String(
      (e && e.parameter && e.parameter.view) ||
      ''
    );

  if (
    view ===
    'recommendations'
  ) {

    return buildRecommendationsHtml_();
  }

  const resources =
    getProjectResources();

  const formUrl =
    resources.form.getPublishedUrl();

  const embeddedUrl =
    formUrl.indexOf('?') >= 0
      ? formUrl + '&embedded=true'
      : formUrl + '?embedded=true';

  return HtmlService
    .createHtmlOutput(
      buildSvsFormEmbedHtml(
        embeddedUrl
      )
    )
    .setTitle(
      'SVS Ministry Form'
    )
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
}

function buildRecommendationsHtml_() {

  try {

    const resources =
      getProjectResources();

    const sheet =
      getRecommendationsSheet(
        resources.spreadsheet
      );

    const values =
      sheet
        ? sheet
          .getDataRange()
          .getDisplayValues()
        : [];

    return HtmlService
      .createHtmlOutput(
        buildRecommendationsTableHtml_(
          values
        )
      )
      .setTitle(
        'SVS Recommendations'
      )
      .setXFrameOptionsMode(
        HtmlService.XFrameOptionsMode.ALLOWALL
      );
  }
  catch (
    error
  ) {

    return HtmlService
      .createHtmlOutput(
        buildRecommendationsErrorHtml_(
          error.message || String(error)
        )
      )
      .setTitle(
        'SVS Recommendations Error'
      )
      .setXFrameOptionsMode(
        HtmlService.XFrameOptionsMode.ALLOWALL
      );
  }
}

function buildRecommendationsTableHtml_(
  values
) {

  const rows =
    values
      .filter(row =>
        row.some(cell =>
          String(
            cell
          ).trim()
        )
      );

  const body =
    rows.length
      ? rows
        .map(row =>
          '<tr>' +
          row
            .map(cell =>
              '<td>' +
              escapeHtmlText(
                cell
              ) +
              '</td>'
            )
            .join(
              ''
            ) +
          '</tr>'
        )
        .join(
          ''
        )
      : '<tr><td>No recommendations available.</td></tr>';

  return `
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    :root {
      color-scheme: dark;
    }

    body {
      margin: 0;
      background: #0b1220;
      color: #f5f7fa;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.4;
    }

    .recommendations-shell {
      padding: 16px;
    }

    .recommendations-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    h1 {
      margin: 0;
      color: #d7b36a;
      font-size: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #111827;
      border: 1px solid #334155;
    }

    td {
      padding: 8px 10px;
      border: 1px solid #334155;
      vertical-align: top;
      white-space: pre-wrap;
    }

    tr:first-child td,
    tr td:first-child:not(:empty):last-child {
      color: #d7b36a;
      font-weight: 700;
      background: #182233;
    }

    @media (max-width: 700px) {
      .recommendations-shell {
        padding: 10px;
      }

      body {
        font-size: 12px;
      }

      td {
        padding: 6px;
      }
    }
  </style>
</head>
<body>
  <div class="recommendations-shell">
    <div class="recommendations-header">
      <h1>Recommended Assignments</h1>
    </div>
    <table>
      <tbody>
        ${body}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

function buildRecommendationsErrorHtml_(
  message
) {

  return `
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      padding: 24px;
      background: #0b1220;
      color: #f5f7fa;
      font-family: Arial, sans-serif;
      line-height: 1.5;
    }

    h1 {
      color: #d7b36a;
    }

    .panel {
      max-width: 760px;
      padding: 20px;
      border: 1px solid #334155;
      border-radius: 10px;
      background: #111827;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Unable to Load Recommendations</h1>
    <p>${escapeHtmlText(message)}</p>
  </div>
</body>
</html>`;
}

function doPost(
  e
) {

  try {
    const action =
      e.parameter.action;

    if (
      action !==
      'archiveAndReset'
    ) {
      throw new Error(
        'Unsupported admin action.'
      );
    }

    const user =
      verifyGoogleAdminToken_(
        e.parameter.idToken
      );

    archiveAndReset();

    return buildAdminResultHtml_(
      'Archive Complete',
      'Archived and reset current SVS data for ' + user.email + '.'
    );
  }
  catch (
    error
  ) {
    return buildAdminResultHtml_(
      'Archive Failed',
      error.message || String(error)
    );
  }
}

function verifyGoogleAdminToken_(
  idToken
) {

  if (
    !idToken
  ) {
    throw new Error(
      'Google sign-in token is missing.'
    );
  }

  const response =
    UrlFetchApp.fetch(
      'https://oauth2.googleapis.com/tokeninfo?id_token=' +
        encodeURIComponent(idToken),
      {
        muteHttpExceptions:
          true
      }
    );

  if (
    response.getResponseCode() !==
    200
  ) {
    throw new Error(
      'Google sign-in could not be verified.'
    );
  }

  const payload =
    JSON.parse(
      response.getContentText()
    );

  const email =
    String(
      payload.email || ''
    ).toLowerCase();

  if (
    !email
  ) {
    throw new Error(
      'Google account email was not available.'
    );
  }

  const allowedEmails =
    getSvsAdminEmails_();

  if (
    !allowedEmails.includes(email)
  ) {
    throw new Error(
      email + ' is not allowed to run SVS admin actions.'
    );
  }

  return {
    email
  };
}

function getSvsAdminEmails_() {

  const value =
    PropertiesService
      .getScriptProperties()
      .getProperty(
        'SVS_ADMIN_EMAILS'
      );

  if (
    !value
  ) {
    throw new Error(
      'SVS_ADMIN_EMAILS script property is not configured.'
    );
  }

  return value
    .split(',')
    .map(email =>
      email.trim().toLowerCase()
    )
    .filter(Boolean);
}

function buildAdminResultHtml_(
  title,
  message
) {

  return HtmlService
    .createHtmlOutput(`
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      padding: 32px;
      background: #0b1220;
      color: #f5f7fa;
      font-family: Arial, sans-serif;
      line-height: 1.5;
    }

    h1 {
      color: #d7b36a;
    }

    .panel {
      max-width: 680px;
      padding: 24px;
      border: 1px solid #334155;
      border-radius: 10px;
      background: #111827;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>${escapeHtmlText(title)}</h1>
    <p>${escapeHtmlText(message)}</p>
  </div>
</body>
</html>`)
    .setTitle(
      title
    );
}

function buildSvsFormEmbedHtml(
  formUrl
) {

  return `
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      background: #ffffff;
    }

    iframe {
      width: 100%;
      height: 100%;
      min-height: 760px;
      border: 0;
    }
  </style>
</head>
<body>
  <iframe
    src="${escapeHtmlAttribute(formUrl)}"
    title="SVS Ministry Form">
    Loading...
  </iframe>
</body>
</html>`;
}

function escapeHtmlAttribute(
  value
) {

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(
  value
) {

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
