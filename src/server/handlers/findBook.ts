import { BookSheetRepository } from '@/server/__generated__/repository/sheet/book.sheet.repository';
import { container } from 'tsyringe';
import { Book } from '../__generated__/entity/book.entity';
import { BookService } from '@/server/__generated__/service/book.service';

container.register('IBookRepository', {
  useClass: BookSheetRepository,
})

const bookService = container.resolve(BookService);

export function findBook(id: string): Book | null {
  return bookService.findById(id);
}
