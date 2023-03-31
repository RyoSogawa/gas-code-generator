import { container } from 'tsyringe';

import type { SerializedBook } from '@/models/book.entity';

import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBookById(id: string): SerializedBook | null {
  const book = container.resolve(BookService).findById(id);
  return book ? book.serialize() : null;
}
