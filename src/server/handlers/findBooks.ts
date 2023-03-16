import { BookRepository } from '@/server/__generated__/infra/repository/book.repository';
import { container } from 'tsyringe';
import { Book } from '../__generated__/domain/entity/book.entity';
import { BookService } from '@/server/__generated__/application/service/book.service';

container.register('IBookRepository', {
  useClass: BookRepository,
})

const bookService = container.resolve(BookService);

export function findBooks(): Book[] {
  return bookService.findAll();
}
