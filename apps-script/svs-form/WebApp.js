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
