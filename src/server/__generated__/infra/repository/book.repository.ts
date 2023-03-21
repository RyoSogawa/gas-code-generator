import { Book } from '@/server/__generated__/domain/entity/book.entity';
import { IBookRepository } from '@/server/__generated__/domain/repository/book.repository';

export class BookRepository implements IBookRepository {
  public findAll(): Book[] {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return [];
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allBooks = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    return allBooks.map((book, index) => new Book(
      index,
      // @ts-ignore
      ...book,
    ));
  }

  public findById(id: string): Book | null {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return null;
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allBooks = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    const index = allBooks.findIndex(value => value[0] === id);
    if (index === -1) return null;
    const book = allBooks[index];

    return new Book(
      index,
      // @ts-ignore
      ...book,
    );
  }

  public save(book: Book): Book {
    throw new Error('Not implemented');
  }

  public delete(id: string): void {
    throw new Error('Not implemented');
  }
}
