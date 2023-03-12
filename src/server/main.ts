function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('React + GAS');
}

// @ts-ignore
global.doGet = doGet

interface SheetData {
  name: string;
  numOfRows: number;
}

const getSheetData = (): SheetData => {
  const sheet = SpreadsheetApp.getActiveSheet();
  return {
    name: sheet.getName(),
    numOfRows: sheet.getMaxRows(),
  };
};

const appendRowsToSheet = (sheetName: string, rowsToAdd: number): void => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return;
  sheet.insertRowsAfter(sheet.getMaxRows(), rowsToAdd);
};

// @ts-ignore
global.getSheetData = getSheetData;
// @ts-ignore
global.appendRowsToSheet = appendRowsToSheet;

export { getSheetData, appendRowsToSheet };
