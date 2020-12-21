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
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import BooksService from './books.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('post')
  postBook(@Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}
