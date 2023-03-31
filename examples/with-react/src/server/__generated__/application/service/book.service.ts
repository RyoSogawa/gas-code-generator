import { inject, injectable } from 'tsyringe';

import type { Book } from '@/models/book.entity';
import type { IBookRepository } from '@/server/__generated__/domain/repository/book.repository';

@injectable()
export class BookService {
  constructor(
    @inject('IBookRepository')
    private readonly bookRepository: IBookRepository,
  ) {}

  public findAll(): Book[] {
    return this.bookRepository.findAll();
  }

  public findById(id: string): Book | null {
    return this.bookRepository.findById(id);
  }
}
