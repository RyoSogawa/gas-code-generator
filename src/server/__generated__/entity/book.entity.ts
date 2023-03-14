export class Book {
  constructor(
    public readonly rowNumber: number,
    public readonly id: string,
    public readonly title: string,
    public readonly publishedAt: Date,
    public readonly soldOut: boolean,
  ) {
  }
}