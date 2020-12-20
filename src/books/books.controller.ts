import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Header,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('post')
  postBook(@Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}
