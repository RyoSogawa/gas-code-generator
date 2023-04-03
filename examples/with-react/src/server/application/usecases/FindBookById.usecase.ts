import { inject, injectable } from 'tsyringe';

import type { Book } from '@/models/book.entity';
import type { IAuthorRepository } from '@/server/__generated__/author.repository';
import type { IBookRepository } from '@/server/__generated__/book.repository';

@injectable()
export class FindBookByIdUsecase {
  constructor(
    @inject('IBookRepository')
    private readonly bookRepository: IBookRepository,
    @inject('IAuthorRepository')
    private readonly authorRepository: IAuthorRepository,
  ) {}

  public invoke(id: string): Book | null {
    const book = this.bookRepository.findById(id);
    if (!book) return null;

    const author = book.data.authorId && this.authorRepository.findById(book.data.authorId);
    if (author) {
      book.attachAuthor(author);
    }
    return book;
  }
}
