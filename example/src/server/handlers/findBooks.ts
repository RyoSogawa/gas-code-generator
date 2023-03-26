import { container } from 'tsyringe';
import { Book } from '../__generated__/domain/entity/book.entity';
import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBooks(): Book[] {
  return container.resolve(BookService).findAll();
}
