import { Module } from '@nestjs/common';
import GenresService from './genres.service';
import GenreController from './genres.controller';
@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenresService],
})
export default class GenreModule {}
