import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Book, BookDocument } from '../schemas/books.schema';
import { BookDto } from './book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.find();
  }

  async createOne(newBook: BookDto): Promise<Book> {
    const createdBook = await this.bookModel.create(newBook);
    return createdBook.save();
  }

  async modifyOne(
    bookId: Types.ObjectId,
    bookToModify: BookDto,
  ): Promise<Book> {
    return this.bookModel.findOneAndReplace({ _id: bookId }, bookToModify, {
      new: true,
    });
  }

  async deleteOne(bookId: Types.ObjectId): Promise<Book> {
    return this.bookModel.findByIdAndRemove({ _id: bookId });
  }
}
