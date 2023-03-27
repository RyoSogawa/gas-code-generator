export function appendRowsToSheet(sheetName: string, rowsToAdd: number): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return;
  sheet.insertRowsAfter(sheet.getMaxRows(), rowsToAdd);
}
