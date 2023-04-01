import { container } from 'tsyringe';

import { BookRepository } from '@/server/infrastructure/repositories/book.repository';

container.registerSingleton('IBookRepository', BookRepository);
