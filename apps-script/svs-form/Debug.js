function debugProperties() {

  const props =
    PropertiesService.getScriptProperties();

  Logger.log(
    'Stored Form ID: ' +
    props.getProperty('SVS_FORM_ID')
  );

  Logger.log(
    'Stored Sheet ID: ' +
    props.getProperty('SVS_SHEET_ID')
  );
}
function verifyAssets() {

  const props =
    PropertiesService.getScriptProperties();

  const formId =
    props.getProperty('SVS_FORM_ID');

  const sheetId =
    props.getProperty('SVS_SHEET_ID');

  Logger.log(
    FormApp.openById(formId).getTitle()
  );

  Logger.log(
    SpreadsheetApp.openById(sheetId).getName()
  );
}