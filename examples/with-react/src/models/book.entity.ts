import type { IBook } from '@/models/__generated__/book.interface';

export type SerializedBook = IBook & {
  isOnSale: boolean;
};

export class Book {
  constructor(public readonly rowNumber: number, public readonly data: IBook) {}

  public get isOnSale(): boolean {
    return !this.data.soldOut && !!this.data.publishedAt;
  }

  public serialize(): SerializedBook {
    return {
      ...this.data,
      isOnSale: this.isOnSale,
    };
  }
}
