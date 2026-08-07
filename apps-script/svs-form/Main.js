/**
 * =========================================================
 * MAIN.GS
 * SvS Ministry System V2
 * FINALIZED
 * =========================================================
 */

const PROPERTY_FORM_ID = 'SVS_FORM_ID';
const PROPERTY_SHEET_ID = 'SVS_SHEET_ID';

/**
 * =========================================================
 * PROJECT RESOURCES
 * =========================================================
 */

function getProjectResources() {

  const props =
    PropertiesService.getScriptProperties();

  let formId =
    FORM_ID ||
    props.getProperty(
      PROPERTY_FORM_ID
    );

  let sheetId =
    SHEET_ID ||
    props.getProperty(
      PROPERTY_SHEET_ID
    );

  /**
   * Existing Assets
   */

  if (
    formId &&
    sheetId
  ) {

    return {

      form:
        FormApp.openById(
          formId
        ),

      spreadsheet:
        SpreadsheetApp.openById(
          sheetId
        )
    };
  }

  /**
   * Create New Assets
   */

  const form =
    FormApp.create(
      'Whiteout Survival - SvS Ministry Application'
    );

  const spreadsheet =
    SpreadsheetApp.create(
      'Whiteout Survival - SvS Ministry Responses'
    );

  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    spreadsheet.getId()
  );

  props.setProperties({

    [PROPERTY_FORM_ID]:
      form.getId(),

    [PROPERTY_SHEET_ID]:
      spreadsheet.getId()
  });

  return {
    form,
    spreadsheet
  };
}

/**
 * =========================================================
 * CONFIGURATION SHEET
 * =========================================================
 */

function getConfigurationSheet(
  spreadsheet
) {

  return spreadsheet.getSheetByName(
    SHEETS.CONFIGURATION
  );
}

/**
 * =========================================================
 * DASHBOARD SHEET
 * =========================================================
 */

function getDashboardSheet(
  spreadsheet
) {

  return spreadsheet.getSheetByName(
    SHEETS.DASHBOARD
  );
}

/**
 * =========================================================
 * RECOMMENDATIONS SHEET
 * =========================================================
 */

function getRecommendationsSheet(
  spreadsheet
) {

  return spreadsheet.getSheetByName(
    SHEETS.RECOMMENDATIONS
  );
}

/**
 * =========================================================
 * RESPONSE SHEET
 * =========================================================
 */

function getResponseSheet(
  spreadsheet
) {

  const sheets =
    spreadsheet.getSheets();

  for (
    let i = 0;
    i < sheets.length;
    i++
  ) {

    const name =
      sheets[i].getName();

    if (
      name.indexOf(
        'Form Responses'
      ) >= 0
    ) {

      return sheets[i];
    }
  }

  throw new Error(
    'Form response sheet not found.'
  );
}

/**
 * =========================================================
 * SETUP
 * =========================================================
 */

function setupProject() {

  const resources =
    getProjectResources();

  Configuration_initialize(
    resources.spreadsheet
  );

  Dashboard_initialize(
    resources.spreadsheet
  );

  Logger.log(
    'FORM ID: ' +
    resources.form.getId()
  );

  Logger.log(
    'FORM URL: ' +
    resources.form.getPublishedUrl()
  );

  Logger.log(
    'SPREADSHEET ID: ' +
    resources.spreadsheet.getId()
  );

  Logger.log(
    'SPREADSHEET URL: ' +
    resources.spreadsheet.getUrl()
  );
}

/**
 * =========================================================
 * DEPLOY
 * =========================================================
 */

function deployFreshSystem() {

  setupProject();

  buildOrUpdateForm();

  setupTriggers();

  refreshAll();

  Logger.log(
    'Deployment Complete'
  );
}

/**
 * =========================================================
 * RESET STORED IDS
 * =========================================================
 *
 * Use ONLY if you want
 * a completely brand new form/spreadsheet.
 *
 * =========================================================
 */

function clearStoredAssets() {

  const props =
    PropertiesService.getScriptProperties();

  props.deleteProperty(
    PROPERTY_FORM_ID
  );

  props.deleteProperty(
    PROPERTY_SHEET_ID
  );

  Logger.log(
    'Stored asset IDs cleared.'
  );
}

/**
 * =========================================================
 * STATUS
 * =========================================================
 */

function systemStatus() {

  const resources =
    getProjectResources();

  Logger.log(
    'FORM ID: ' +
    resources.form.getId()
  );

  Logger.log(
    'SHEET ID: ' +
    resources.spreadsheet.getId()
  );
}

