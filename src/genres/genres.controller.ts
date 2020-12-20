import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreService from './genres.service';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreService) {}

  @Post('post')
  postGenre(@Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
