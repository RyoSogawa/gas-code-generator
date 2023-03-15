// TODO: auto-generate this file
import 'reflect-metadata';

import { appendRowsToSheet } from '@/server/handlers/appendRowsToSheet';
import { doGet } from '@/server/handlers/doGet';
import { findBookById } from '@/server/handlers/findBookById';
import { findBooks } from '@/server/handlers/findBooks';
import { getSheetData } from '@/server/handlers/getSheetData';

export { getSheetData };
export { appendRowsToSheet };
export { findBookById };
export { findBooks };

declare const global: any;
global.getSheetData = getSheetData;
global.appendRowsToSheet = appendRowsToSheet;
global.doGet = doGet;
global.findBookById = findBookById;
global.findBooks = findBooks;
