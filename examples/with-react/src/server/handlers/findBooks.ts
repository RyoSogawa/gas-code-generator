import { container } from 'tsyringe';

import type { Book } from '@/models/__generated__/book.entity';

import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBooks(): Book[] {
  return container.resolve(BookService).findAll();
}
