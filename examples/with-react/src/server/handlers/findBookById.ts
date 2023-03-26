import { container } from 'tsyringe';
import { Book } from '@/models/__generated__/domain/entity/book.entity';
import { BookService } from '@/server/__generated__/application/service/book.service';

export function findBookById(id: string): Book | null {
  return container.resolve(BookService).findById(id);
}
