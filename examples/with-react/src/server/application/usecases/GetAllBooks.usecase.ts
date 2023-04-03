import { inject, injectable } from 'tsyringe';

import type { Book } from '@/models/book.entity';
import type { IAuthorRepository } from '@/server/__generated__/author.repository';
import type { IBookRepository } from '@/server/__generated__/book.repository';

@injectable()
export class GetAllBooksUsecase {
  constructor(
    @inject('IBookRepository')
    private readonly bookRepository: IBookRepository,
    @inject('IAuthorRepository')
    private readonly authorRepository: IAuthorRepository,
  ) {}

  public invoke(): Book[] {
    const books = this.bookRepository.getAll();
    const authors = this.authorRepository.getAll();
    books.forEach((book) => {
      const author = authors.find((a) => a.data.id === book.data.authorId);
      if (author) {
        book.attachAuthor(author);
      }
    });

    return books;
  }
}
