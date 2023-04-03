import { z } from 'zod';

import type { SerializedAuthor } from '@/models/__generated__/author.entity';

import { Author } from '@/models/__generated__/author.entity';

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  publishedAt: z.date().optional(),
  soldOut: z.boolean().optional(),
  authorId: z.string(),
  author: z.instanceof(Author).optional(),
});

export type IBook = z.infer<typeof bookSchema>;

export type SerializedBook = Omit<IBook, 'publishedAt' | 'author'> & {
  publishedAt?: string;
  author?: SerializedAuthor;
};

export class Book {
  constructor(public readonly rowNumber: number, public readonly data: IBook) {}

  public static parseFromArray(data: unknown[]): IBook {
    return bookSchema.parse({
      id: String(data[0]),
      title: data[1],
      publishedAt: data[2],
      soldOut: data[3],
      authorId: String(data[4]),
    });
  }

  public static deserialize(rowNumber: number, data: unknown[]): Book {
    return new Book(rowNumber, this.parseFromArray(data));
  }

  public attachAuthor(author: Author): void {
    this.data.author = author;
  }

  public serialize(): SerializedBook {
    return {
      ...this.data,
      publishedAt: this.data.publishedAt?.toISOString(),
      author: this.data.author?.serialize(),
    };
  }
}
