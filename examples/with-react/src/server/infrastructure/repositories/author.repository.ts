import type { IAuthorRepository } from '@/server/__generated__/author.repository';

import { Author } from '@/models/__generated__/author.entity';

export class AuthorRepository implements IAuthorRepository {
  public getAll(): Author[] {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Author');
    if (!sheet) return [];
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allAuthors = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    return allAuthors.map((author, index) => {
      return Author.deserialize(index, author);
    });
  }

  public findById(id: string): Author | null {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Author');
    if (!sheet) return null;
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const allAuthors = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    const index = allAuthors.findIndex((value) => String(value[0]) === id);
    if (index === -1) return null;
    const author = allAuthors[index];
    return Author.deserialize(index, author);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public save(book: Author): Author {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public delete(id: string): void {
    throw new Error('Not implemented');
  }
}
