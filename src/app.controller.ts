import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-gaurd';
import { AuthService } from './auth/auth.service';
import CreateUserDto from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: CreateUserDto) {
    return this.authService.login(user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
