function relinkFormToMainSpreadsheet() {

  const resources = getProjectResources();

  resources.form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    resources.spreadsheet.getId()
  );

  setupTriggers();

  Logger.log('Form relinked to main spreadsheet.');
  Logger.log('Form URL: ' + resources.form.getPublishedUrl());
  Logger.log('Spreadsheet URL: ' + resources.spreadsheet.getUrl());
}