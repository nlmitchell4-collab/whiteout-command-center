function authorizeSvsAdminScopes() {

  UrlFetchApp.fetch(
    'https://www.googleapis.com/discovery/v1/apis',
    {
      muteHttpExceptions:
        true
    }
  );

  PropertiesService
    .getScriptProperties()
    .getProperties();

  return 'SVS admin scopes authorized.';
}
