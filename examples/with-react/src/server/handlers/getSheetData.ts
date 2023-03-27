interface SheetData {
  name: string;
  numOfRows: number;
}

export function getSheetData(): SheetData {
  const sheet = SpreadsheetApp.getActiveSheet();
  return {
    name: sheet.getName(),
    numOfRows: sheet.getMaxRows(),
  };
}
