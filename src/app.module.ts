import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { MagazinesModule } from './magazines/magazines.module';

@Module({
  imports: [CoreModule, BooksModule, MagazinesModule],
})
export class AppModule {}
