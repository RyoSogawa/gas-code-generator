import { BookRepository } from '@/server/__generated__/infra/repository/book.repository';
import { container } from 'tsyringe';

container.registerSingleton('IBookRepository', BookRepository);
