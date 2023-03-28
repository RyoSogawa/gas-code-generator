import { container } from 'tsyringe';

import type { Book } from '@/models/__generated__/book.entity';

import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBookById(id: string): Book | null {
  return container.resolve(BookService).findById(id);
}
