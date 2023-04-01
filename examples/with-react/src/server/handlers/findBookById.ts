import { container } from 'tsyringe';

import type { SerializedBook } from '@/models/book.entity';

import { FindBookByIdUsecase } from '@/server/application/usecases/FindBookById.usecase';

export function findBookById(id: string): SerializedBook | null {
  const book = container.resolve(FindBookByIdUsecase).invoke(id);
  return book ? book.serialize() : null;
}
