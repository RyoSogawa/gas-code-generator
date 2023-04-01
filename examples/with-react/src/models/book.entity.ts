import type {
  IBook,
  SerializedBook as BaseSerializedBook,
} from '@/models/__generated__/book.entity';

import { Book as BaseBook } from '@/models/__generated__/book.entity';

export type SerializedBook = BaseSerializedBook & {
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
      ...super.serialize(),
      isOnSale: this.isOnSale,
    };
  }
}
