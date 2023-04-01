import { container } from 'tsyringe';

import type { SerializedBook } from '@/models/book.entity';

import { GetAllBooksUsecase } from '@/server/application/usecases/GetAllBooks.usecase';

export function findBooks(): SerializedBook[] {
  const books = container.resolve(GetAllBooksUsecase).invoke();
  return books.map((book) => book.serialize());
}
