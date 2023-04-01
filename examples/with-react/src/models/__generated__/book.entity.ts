import { z } from 'zod';

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  publishedAt: z.date().optional(),
  soldOut: z.boolean().optional(),
});

export type IBook = z.infer<typeof bookSchema>;

export type SerializedBook = Omit<IBook, 'publishedAt'> & {
  publishedAt?: string;
};

export class Book {
  constructor(public readonly rowNumber: number, public readonly data: IBook) {}

  public static parseFromArray(data: unknown[]): IBook {
    return bookSchema.parse({
      id: String(data[0]),
      title: data[1],
      publishedAt: data[2],
      soldOut: data[3],
    });
  }

  public static deserialize(rowNumber: number, data: unknown[]): Book {
    return new Book(rowNumber, this.parseFromArray(data));
  }

  public serialize(): SerializedBook {
    return {
      ...this.data,
      publishedAt: this.data.publishedAt?.toISOString(),
    };
  }
}
