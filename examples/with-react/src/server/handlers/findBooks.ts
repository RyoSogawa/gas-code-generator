import { container } from 'tsyringe';

import type { SerializedBook } from '@/models/book.entity';

import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBooks(): SerializedBook[] {
  const books = container.resolve(BookService).findAll();
  return books.map((book) => book.serialize());
}
