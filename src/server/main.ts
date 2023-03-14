// TODO: auto-generate this file
import { appendRowsToSheet } from './handlers/appendRowsToSheet';
import { doGet } from './handlers/doGet';
import { findBook } from './handlers/findBook';
import { getSheetData } from './handlers/getSheetData';

export { getSheetData };
export { appendRowsToSheet };
export { findBook };

declare const global: any;
global.getSheetData = getSheetData;
global.appendRowsToSheet = appendRowsToSheet;
global.doGet = doGet;
global.findBook = findBook;
