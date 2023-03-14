// TODO: auto-generate this file
import { appendRowsToSheet } from '@/server/handlers/appendRowsToSheet';
import { doGet } from '@/server/handlers/doGet';
import { findBook } from '@/server/handlers/findBook';
import { getSheetData } from '@/server/handlers/getSheetData';

export { getSheetData };
export { appendRowsToSheet };
export { findBook };

declare const global: any;
global.getSheetData = getSheetData;
global.appendRowsToSheet = appendRowsToSheet;
global.doGet = doGet;
global.findBook = findBook;
