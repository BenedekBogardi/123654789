import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private readonly  books : CreateBookDto[] = [
    {
      id: 1,
      title: "A great book",
      author: "Author No.1",
      isbn: "Abc",
      publishYear: 1999,
      reserved: false
    },
    {
      id: 2,
      title: "A really bad book",
      author: "Author No.2",
      isbn: "cbaA",
      publishYear: 2001,
      reserved: false
    },
    {
      id: 3,
      title: "A book of papers",
      author: "Author No.3",
      isbn: "akg",
      publishYear: 2010,
      reserved: true
    }
  ]
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll(): CreateBookDto[] {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
