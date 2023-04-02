import { z } from 'zod';

export const authorSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type IAuthor = z.infer<typeof authorSchema>;

export type SerializedAuthor = IAuthor;

export class Author {
  constructor(public readonly rowNumber: number, public readonly data: IAuthor) {}

  public static parseFromArray(data: unknown[]): IAuthor {
    return authorSchema.parse({
      id: String(data[0]),
      name: data[1],
    });
  }

  public static deserialize(rowNumber: number, data: unknown[]): Author {
    return new Author(rowNumber, this.parseFromArray(data));
  }

  public serialize(): SerializedAuthor {
    return {
      ...this.data,
    };
  }
}
