import type { Book } from '@/models/book.entity';

export interface IBookRepository {
  findAll(): Book[];
  findById(id: string): Book | null;
  save(book: Book): Book;
  delete(id: string): void;
}
