import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Put,
  Header,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersServices } from './users.service';
import CreateUserDto from './dto/create-user.dto';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UsersServices) {}

  //'postUser()' will handle the creating of new User
  @Post('post')
  @Header('Content-Type', 'application/json')
  postUser(@Body() user: CreateUserDto) {
    console.log('this is user!!!!');
    return this.usersServices.insert(user);
  }
  // 'getAll()' returns the list of all the existing users in the database

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  //'getBooks()' return all the books which are associated with the user
  // provided through 'userID' by the request
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
  })
  @Get('books')
  getBooks(@Query('id') userID) {
    return this.usersServices.getBooksOfUser(userID);
  }
}
