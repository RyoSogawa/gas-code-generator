import { container } from 'tsyringe';

import type { SerializedBook } from '@/models/book.entity';
import type { PaginationParams } from '@/types';

import { GetAllBooksUsecase } from '@/server/application/usecases/GetAllBooks.usecase';

export function getAllBooks(params?: PaginationParams): SerializedBook[] {
  const books = container.resolve(GetAllBooksUsecase).invoke(params);
  return books.map((book) => book.serialize());
}
