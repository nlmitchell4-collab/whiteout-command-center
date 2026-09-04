function doGet() {

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

function authorizeSvsAdminScopes() {

  UrlFetchApp.fetch(
    'https://oauth2.googleapis.com'
  );

  PropertiesService
    .getScriptProperties()
    .getProperties();

  return 'SVS admin scopes authorized.';
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
