function authorizeSvsAdminScopes() {

  UrlFetchApp.fetch(
    'https://oauth2.googleapis.com'
  );

  PropertiesService
    .getScriptProperties()
    .getProperties();

  return 'SVS admin scopes authorized.';
}
