/**
 * =========================================================
 * CONFIGURATION.GS
 * SvS Ministry System V2
 * FINALIZED
 * =========================================================
 */

/**
 * =========================================================
 * INITIALIZE CONFIGURATION
 * =========================================================
 */

function Configuration_initialize(
  spreadsheet
) {

  let sheet =
    spreadsheet.getSheetByName(
      SHEETS.CONFIGURATION
    );

  if (sheet) {
    return;
  }

  sheet =
    spreadsheet.insertSheet(
      SHEETS.CONFIGURATION
    );

  buildConfigurationSheet(
    sheet
  );
}

/**
 * =========================================================
 * REBUILD CONFIGURATION
 * =========================================================
 */

function rebuildConfiguration() {

  const resources =
    getProjectResources();

  const spreadsheet =
    resources.spreadsheet;

  let sheet =
    spreadsheet.getSheetByName(
      SHEETS.CONFIGURATION
    );

  if (!sheet) {

    sheet =
      spreadsheet.insertSheet(
        SHEETS.CONFIGURATION
      );
  }

  sheet.clear();

  buildConfigurationSheet(
    sheet
  );
}

/**
 * =========================================================
 * BUILD CONFIGURATION
 * =========================================================
 */

function buildConfigurationSheet(
  sheet
) {

  let row = 1;

  /**
   * SPEEDUP SCORES
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.SPEEDUP_SCORES
  );

  sheet.getRange(
    row,
    1,
    5,
    2
  ).setValues([
    ['Less than 15 Days', 10],
    ['15-30 Days', 25],
    ['30-45 Days', 50],
    ['45-60 Days', 75],
    ['60+ Days', 100]
  ]);

  row += 7;

  /**
   * FIRE CRYSTAL SCORES
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.FIRE_CRYSTAL_SCORES
  );

  sheet.getRange(
    row,
    1,
    5,
    2
  ).setValues([
    [1000, 5],
    [2500, 10],
    [5000, 20],
    [7000, 30],
    [10000, 40]
  ]);

  row += 7;

  /**
   * SRFC SCORES
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.SRFC_SCORES
  );

  sheet.getRange(
    row,
    1,
    5,
    2
  ).setValues([
    [50, 5],
    [100, 10],
    [250, 20],
    [500, 30],
    [1000, 40]
  ]);

  row += 7;

  /**
   * SHARD SCORES
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.SHARD_SCORES
  );

  sheet.getRange(
    row,
    1,
    5,
    2
  ).setValues([
    [1000, 5],
    [2500, 10],
    [5000, 20],
    [7000, 30],
    [10000, 40]
  ]);

  row += 7;

  /**
   * COVERAGE BONUS
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.COVERAGE_BONUS
  );

  sheet.getRange(
    row,
    1,
    3,
    2
  ).setValues([
    [2, 5],
    [4, 15],
    [6, 30]
  ]);

  row += 5;

  /**
   * MINISTRY MAPPING
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.MINISTRY_MAPPING
  );

  sheet.getRange(
    row,
    1,
    4,
    2
  ).setValues([
    ['Construction', 'Vice President'],
    ['Research', 'Vice President'],
    ['Troop Training', 'Minister of Education'],
    ['Final Sprint', 'Vice President']
  ]);

  row += 6;

  /**
   * DASHBOARD SETTINGS
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.DASHBOARD_SETTINGS
  );

  sheet.getRange(
    row,
    1,
    1,
    2
  ).setValues([
    [
      CONFIG_KEYS.MIN_COVERAGE_PER_BLOCK,
      DEFAULTS.MIN_COVERAGE_PER_BLOCK
    ]
  ]);

  row += 3;

  /**
   * FORM SETTINGS
   */

  sheet.getRange(
    row++,
    1
  ).setValue(
    CONFIG_SECTIONS.FORM_SETTINGS
  );

  sheet.getRange(
    row,
    1,
    1,
    2
  ).setValues([
    [
      CONFIG_KEYS.MAX_RECOMMENDATIONS_PER_BLOCK,
      DEFAULTS.MAX_RECOMMENDATIONS_PER_BLOCK
    ]
  ]);

  sheet.autoResizeColumns(
    1,
    5
  );

  sheet.setFrozenRows(
    1
  );
}

/**
 * =========================================================
 * RESET CONFIGURATION TO DEFAULTS
 * =========================================================
 */

function resetConfigurationDefaults() {

  const resources =
    getProjectResources();

  const spreadsheet =
    resources.spreadsheet;

  const sheet =
    getConfigurationSheet(
      spreadsheet
    );

  sheet.clear();

  buildConfigurationSheet(
    sheet
  );

  Logger.log(
    'Configuration reset to defaults.'
  );
}