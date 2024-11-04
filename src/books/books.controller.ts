import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): CreateBookDto[] {
    return this.booksService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Param('title') title: string, @Param('author') author: string, @Param('publisher') publisher: string, @Param('isbn') isbn: string, @Param('reserved') reserved = false) {
    return this.booksService.create();
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return parseInt(this.booksService.findOne(+id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
  
}
