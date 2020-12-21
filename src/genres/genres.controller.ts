import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import GenreService from './genres.service';
import CreateGenreDto from './dto/create-genre.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('post')
  postGenre(@Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
