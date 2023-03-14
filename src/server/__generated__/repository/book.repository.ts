import { Book } from '../entity/book.entity';

export class BookRepository {
  static findById(id: string): Book | null {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Book');
    if (!sheet) return null;
    const lastRow = sheet.getLastRow();
    const allIds = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    const index = allIds.findIndex(value => value[0] === id);
    if (index === -1) return null;
    const book = allIds[index];

    return new Book(
      index,
      // @ts-ignore
      ...book,
    );
  }
}
