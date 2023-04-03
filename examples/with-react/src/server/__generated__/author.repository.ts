import type { Author } from '@/models/__generated__/author.entity';

export interface IAuthorRepository {
  getAll(): Author[];
  findById(id: string): Author | null;
  save(author: Author): Author;
  delete(id: string): void;
}
