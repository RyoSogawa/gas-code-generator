import { inject, injectable } from 'tsyringe';

import type { Book } from '@/models/book.entity';
import type { IBookRepository } from '@/server/__generated__/domain/repository/book.repository';

@injectable()
export class GetAllBooksUsecase {
  constructor(
    @inject('IBookRepository')
    private readonly bookRepository: IBookRepository,
  ) {}

  public invoke(): Book[] {
    return this.bookRepository.findAll();
  }
}
