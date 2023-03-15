import { Book } from '@/server/__generated__/entity/book.entity';
import type { IBookRepository } from '@/server/__generated__/repository/book.repository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BookService {
  constructor(
    @inject('IBookRepository')
    private readonly bookRepository: IBookRepository,
  ) {
  }

  public findAll(): Book[] {
    return this.bookRepository.findAll()
  }

  public findById(id: string): Book | null {
    return this.bookRepository.findById(id)
  }
}
