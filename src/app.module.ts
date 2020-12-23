import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { SubTaskModule } from './sub-task/sub-task.module';
import { LabelModule } from './label/label.module';
import { LebelController } from './label/lebel.controller';
import { TypeModule } from './type/type.module';
import UserEntity from './db/entity/user.entity';
import BooksModule from './books/books.module';
import GenreModule from './genres/genres.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';

@Module({
  imports: [
    UserModule,
    BooksModule,
    GenreModule,
    TypeOrmModule.forFeature([UserEntity, BookEntity, GenreEntity]),

    TypeOrmModule.forRoot(),

    AuthModule,

    TaskModule,

    SubTaskModule,

    LabelModule,

    TypeModule,
  ],
  controllers: [AppController, LebelController],
  providers: [AppService],
})
export class AppModule {}
