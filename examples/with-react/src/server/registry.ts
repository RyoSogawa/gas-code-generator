import { container } from 'tsyringe';

import { AuthorRepository } from '@/server/infrastructure/repositories/author.repository';
import { BookRepository } from '@/server/infrastructure/repositories/book.repository';

container.registerSingleton('IBookRepository', BookRepository);
container.registerSingleton('IAuthorRepository', AuthorRepository);
