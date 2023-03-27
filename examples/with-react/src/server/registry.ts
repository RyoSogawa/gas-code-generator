import { container } from 'tsyringe';

import { BookRepository } from '@/server/__generated__/infra/repository/book.repository';

container.registerSingleton('IBookRepository', BookRepository);
