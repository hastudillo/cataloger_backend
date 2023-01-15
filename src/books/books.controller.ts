import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from 'src/pipes/parse-object-id.pipe';

import { BookDto } from './book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAll(): Promise<BookDto[]> {
    return await this.booksService.getAll();
  }

  @Post()
  async createOne(@Body() newBook: BookDto): Promise<BookDto> {
    return await this.booksService.createOne(newBook);
  }

  @Put(':bookId')
  async modifyOne(
    @Body() bookToModify: BookDto,
    @Param('bookId', ParseObjectIdPipe) bookId: Types.ObjectId,
  ): Promise<BookDto> {
    return await this.booksService.modifyOne(bookId, bookToModify);
  }

  @Delete(':bookId')
  async deleteOne(
    @Param('bookId', ParseObjectIdPipe) bookId: Types.ObjectId,
  ): Promise<BookDto> {
    return await this.booksService.deleteOne(bookId);
  }
}
