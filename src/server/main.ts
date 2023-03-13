// TODO: auto-generate this file
import { appendRowsToSheet } from './handlers/appendRowsToSheet';
import { doGet } from './handlers/doGet';
import { getSheetData } from './handlers/getSheetData';

export { getSheetData };
export { appendRowsToSheet };

declare const global: any;
global.getSheetData = getSheetData;
global.appendRowsToSheet = appendRowsToSheet;
global.doGet = doGet;
