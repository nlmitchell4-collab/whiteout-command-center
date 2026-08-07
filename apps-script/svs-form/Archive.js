/**
 * Archive and reset helpers for the SvS ministry cycle.
 *
 * Public entry points:
 * - archiveAndReset()
 * - archiveCurrentSvsData()
 * - clearCurrentSvsData()
 * - initializeArchiveWorkbook()
 */

const PROPERTY_ARCHIVE_SHEET_ID = 'SVS_ARCHIVE_SHEET_ID';
const ARCHIVE_WORKBOOK_NAME = 'SvS Archive';
const ARCHIVE_SECTION_DIVIDER = '================================';
const EMPTY_STATE_MESSAGE = 'Awaiting Responses';

function getArchiveWorkbook() {
  const props = PropertiesService.getScriptProperties();
  const archiveId = props.getProperty(PROPERTY_ARCHIVE_SHEET_ID);

  if (!archiveId) {
    const archiveBook = SpreadsheetApp.create(ARCHIVE_WORKBOOK_NAME);
    props.setProperty(PROPERTY_ARCHIVE_SHEET_ID, archiveBook.getId());
    ensureArchiveSheets_(archiveBook);
    return archiveBook;
  }

  const archiveBook = SpreadsheetApp.openById(archiveId);
  ensureArchiveSheets_(archiveBook);
  return archiveBook;
}

function initializeArchiveWorkbook() {
  const archiveBook = getArchiveWorkbook();
  Logger.log('Archive workbook ready: ' + archiveBook.getUrl());
}

function archiveAndReset() {
  archiveCurrentSvsData();
  clearCurrentSvsData();
  Logger.log('SvS data archived and reset.');
}

function archiveCurrentSvsData() {
  const resources = getProjectResources();
  const archiveBook = getArchiveWorkbook();
  const timestamp = getArchiveTimestamp();

  archiveResponses(resources.spreadsheet, archiveBook, timestamp);
  archiveRecommendations(resources.spreadsheet, archiveBook, timestamp);
  archiveDashboard(resources.spreadsheet, archiveBook, timestamp);

  Logger.log('SvS data archived at ' + timestamp + '.');
}

function clearCurrentSvsData() {
  const resources = getProjectResources();

  clearFormResponses(resources.form);
  clearResponseSheet(resources.spreadsheet);
  clearRecommendations(resources.spreadsheet);
  clearDashboard(resources.spreadsheet);

  Logger.log('Current SvS response, recommendation and dashboard data cleared.');
}

function ensureArchiveSheets_(archiveBook) {
  Object.values(ARCHIVE_SHEETS).forEach(name => {
    if (!archiveBook.getSheetByName(name)) {
      archiveBook.insertSheet(name);
    }
  });
}

function appendArchiveSnapshot(sheet, title, timestamp, values) {
  if (!hasArchiveValues_(values)) return;

  const normalizedValues = normalizeArchiveValues_(values);
  const startRow = getNextArchiveStartRow_(sheet);

  sheet.getRange(startRow, 1).setValue(ARCHIVE_SECTION_DIVIDER);
  sheet.getRange(startRow + 1, 1).setValue(title);
  sheet.getRange(startRow + 2, 1).setValue(timestamp);
  sheet
    .getRange(startRow + 4, 1, normalizedValues.length, normalizedValues[0].length)
    .setValues(normalizedValues);
}

function archiveResponses(spreadsheet, archiveBook, timestamp) {
  const source = getResponseSheet(spreadsheet);
  const data = source.getDataRange().getValues();

  if (data.length <= 1) return;

  const latest = getLatestSubmissions(data);
  const values = [latest.headers].concat(latest.rows);

  appendArchiveSnapshot(
    archiveBook.getSheetByName(ARCHIVE_SHEETS.RESPONSES),
    'SvS Responses',
    timestamp,
    values
  );
}

function archiveRecommendations(spreadsheet, archiveBook, timestamp) {
  const source = getRecommendationsSheet(spreadsheet);

  if (!source) return;

  appendArchiveSnapshot(
    archiveBook.getSheetByName(ARCHIVE_SHEETS.RECOMMENDATIONS),
    'SvS Recommendations',
    timestamp,
    source.getDataRange().getValues()
  );
}

function archiveDashboard(spreadsheet, archiveBook, timestamp) {
  const source = getDashboardSheet(spreadsheet);

  if (!source) return;

  appendArchiveSnapshot(
    archiveBook.getSheetByName(ARCHIVE_SHEETS.DASHBOARD),
    'SvS Dashboard',
    timestamp,
    source.getDataRange().getValues()
  );
}

function clearFormResponses(form) {
  form.deleteAllResponses();
}

function clearResponseSheet(spreadsheet) {
  const sheet = getResponseSheet(spreadsheet);

  if (sheet.getLastRow() <= 1) return;

  sheet
    .getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn())
    .clearContent();
}

function clearRecommendations(spreadsheet) {
  resetSheetToEmptyState_(getRecommendationsSheet(spreadsheet));
}

function clearDashboard(spreadsheet) {
  resetSheetToEmptyState_(getDashboardSheet(spreadsheet));
}

function resetSheetToEmptyState_(sheet) {
  if (!sheet) return;

  sheet.clear();
  sheet.getRange('A1').setValue(EMPTY_STATE_MESSAGE);
}

function getNextArchiveStartRow_(sheet) {
  const lastRow = sheet.getLastRow();

  return lastRow > 0
    ? lastRow + 3
    : 1;
}

function hasArchiveValues_(values) {
  return Boolean(
    values &&
    values.length &&
    values[0] &&
    values[0].length
  );
}

function normalizeArchiveValues_(values) {
  const width = values.reduce(
    (maxWidth, row) => Math.max(maxWidth, row.length),
    0
  );

  return values.map(row => {
    const normalizedRow = row.slice();

    while (normalizedRow.length < width) {
      normalizedRow.push('');
    }

    return normalizedRow;
  });
}

function resetForNextSvS() {
  clearCurrentSvsData();
}
