import type { Book } from '@/models/book.entity';
import type { PaginationParams } from '@/types';

export interface IBookRepository {
  getAll(params?: PaginationParams): Book[];
  findById(id: string): Book | null;
  save(book: Book): Book;
  delete(id: string): void;
}
