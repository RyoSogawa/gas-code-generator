// TODO: auto-generate this file
import 'reflect-metadata';
import './registry';

import { appendRowsToSheet } from '@/server/handlers/appendRowsToSheet';
import { doGet } from '@/server/handlers/doGet';
import { findBookById } from '@/server/handlers/findBookById';
import { getAllBooks } from '@/server/handlers/getAllBooks';
import { getSheetData } from '@/server/handlers/getSheetData';

export { getSheetData };
export { appendRowsToSheet };
export { findBookById };
export { getAllBooks };

declare const global: any;
global.getSheetData = getSheetData;
global.appendRowsToSheet = appendRowsToSheet;
global.doGet = doGet;
global.findBookById = findBookById;
global.getAllBooks = getAllBooks;
