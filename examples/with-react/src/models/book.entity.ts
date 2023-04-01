import type { IBook } from '@/models/__generated__/book.entity';

import { BaseBook } from '@/models/__generated__/book.entity';

export type SerializedBook = Omit<IBook, 'publishedAt'> & {
  publishedAt?: string;
  isOnSale: boolean;
};

export class Book extends BaseBook {
  constructor(public readonly rowNumber: number, public readonly data: IBook) {
    super(rowNumber, data);
  }

  public static deserialize(rowNumber: number, data: unknown[]): Book {
    return new Book(rowNumber, super.parseFromArray(data));
  }

  public get isOnSale(): boolean {
    return !this.data.soldOut && !!this.data.publishedAt;
  }

  public serialize(): SerializedBook {
    return {
      ...this.data,
      publishedAt: this.data.publishedAt?.toISOString(),
      isOnSale: this.isOnSale,
    };
  }
}
