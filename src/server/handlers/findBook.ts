import { Book } from '../__generated__/entity/book.entity';
import { BookRepository } from '../__generated__/repository/book.repository';

export function findBook(id: string): Book | null {
  return BookRepository.findById(id);
}
