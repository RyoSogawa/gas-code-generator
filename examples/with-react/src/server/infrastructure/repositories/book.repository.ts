import type { IBookRepository } from '@/server/__generated__//book.repository';
import type { PaginationParams } from '@/types';

import { Book } from '@/models/book.entity';

export class BookRepository implements IBookRepository {
  public getAll(params?: PaginationParams): Book[] {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return [];
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allBooks = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    const books = allBooks.map((book, index) => {
      return Book.deserialize(index, book);
    });
    if (!params) return books;

    const startIndex = (() => {
      if (!params.after) return 0;
      const cursorBook = books.find((book) => book.data.id === params.after);
      if (!cursorBook) return 0;
      return cursorBook.rowNumber + 1;
    })();
    const endIndex = params.first ? params.first + startIndex : books.length;
    return books.slice(startIndex, endIndex);
  }

  public findById(id: string): Book | null {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return null;
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allBooks = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    const index = allBooks.findIndex((value) => String(value[0]) === id);
    if (index === -1) return null;
    const book = allBooks[index];
    return Book.deserialize(index, book);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public save(book: Book): Book {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public delete(id: string): void {
    throw new Error('Not implemented');
  }
}
