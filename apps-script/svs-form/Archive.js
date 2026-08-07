/**
 * ARCHIVE.GS
 * Auto Archive Workbook Version
 */

const PROPERTY_ARCHIVE_SHEET_ID = 'SVS_ARCHIVE_SHEET_ID';

function getArchiveWorkbook() {
  const props = PropertiesService.getScriptProperties();
  let archiveId = props.getProperty(PROPERTY_ARCHIVE_SHEET_ID);

  if (!archiveId) {
    const archiveBook = SpreadsheetApp.create('SvS Archive');
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
  Logger.log('Archive Workbook Ready: ' + archiveBook.getUrl());
}

function ensureArchiveSheets_(archiveBook) {
  Object.values(ARCHIVE_SHEETS).forEach(name => {
    if (!archiveBook.getSheetByName(name)) {
      archiveBook.insertSheet(name);
    }
  });
}

function archiveAndReset() {
  const resources = getProjectResources();
  const timestamp = getArchiveTimestamp();

  archiveResponses(resources.spreadsheet, timestamp);
  archiveRecommendations(resources.spreadsheet, timestamp);
  archiveDashboard(resources.spreadsheet, timestamp);

  clearFormResponses(resources.form);
  clearResponseSheet(resources.spreadsheet);
  clearRecommendations(resources.spreadsheet);
  clearDashboard(resources.spreadsheet);
}

function appendArchiveSnapshot(sheet, timestamp, title, values) {
  if (!values || !values.length) return;

  const startRow = Math.max(sheet.getLastRow() + 3, 1);

  sheet.getRange(startRow,1).setValue('================================');
  sheet.getRange(startRow+1,1).setValue(title);
  sheet.getRange(startRow+2,1).setValue(timestamp);

  sheet.getRange(
    startRow+4,
    1,
    values.length,
    values[0].length
  ).setValues(values);
}

function archiveResponses(spreadsheet, timestamp) {
  const source = getResponseSheet(spreadsheet);
  const data = source.getDataRange().getValues();
  if (data.length <= 1) return;

  const latest = getLatestSubmissions(data);
  const values = [latest.headers].concat(latest.rows);

  appendArchiveSnapshot(
    getArchiveWorkbook().getSheetByName(ARCHIVE_SHEETS.RESPONSES),
    timestamp,
    'SvS Responses',
    values
  );
}

function archiveRecommendations(spreadsheet, timestamp) {
  const source = getRecommendationsSheet(spreadsheet);
  if (!source) return;

  appendArchiveSnapshot(
    getArchiveWorkbook().getSheetByName(ARCHIVE_SHEETS.RECOMMENDATIONS),
    timestamp,
    'SvS Recommendations',
    source.getDataRange().getValues()
  );
}

function archiveDashboard(spreadsheet, timestamp) {
  const source = getDashboardSheet(spreadsheet);
  if (!source) return;

  appendArchiveSnapshot(
    getArchiveWorkbook().getSheetByName(ARCHIVE_SHEETS.DASHBOARD),
    timestamp,
    'SvS Dashboard',
    source.getDataRange().getValues()
  );
}

function clearFormResponses(form) {
  form.deleteAllResponses();
}

function clearResponseSheet(spreadsheet) {
  const sheet = getResponseSheet(spreadsheet);
  if (sheet.getLastRow() <= 1) return;

  sheet.getRange(
    2,1,
    sheet.getLastRow()-1,
    sheet.getLastColumn()
  ).clearContent();
}

function clearRecommendations(spreadsheet) {
  const sheet = getRecommendationsSheet(spreadsheet);
  if (!sheet) return;
  sheet.clear();
  sheet.getRange('A1').setValue('Awaiting Responses');
}

function clearDashboard(spreadsheet) {
  const sheet = getDashboardSheet(spreadsheet);
  if (!sheet) return;
  sheet.clear();
  sheet.getRange('A1').setValue('Awaiting Responses');
}

function resetForNextSvS() {
  const resources = getProjectResources();
  clearFormResponses(resources.form);
  clearResponseSheet(resources.spreadsheet);
  clearRecommendations(resources.spreadsheet);
  clearDashboard(resources.spreadsheet);
}
