import { convertArrayToJsonCompatible } from '@gas-code-generator/utils';

import type { IBookRepository } from '@/server/__generated__/domain/repository/book.repository';

import { Book } from '@/models/book.entity';

export class BookRepository implements IBookRepository {
  public findAll(): Book[] {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return [];
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allBooks = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    return allBooks.map((book, index) => {
      const [id, ...fields] = convertArrayToJsonCompatible(book);
      return new Book(index, {
        id: String(id),
        title: fields[0],
        publishedAt: fields[1],
        soldOut: fields[2],
      });
    });
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
    const [, ...fields] = convertArrayToJsonCompatible(book);

    return new Book(index, {
      id,
      title: fields[0],
      publishedAt: fields[1],
      soldOut: fields[2],
    });
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
