import { Module } from '@nestjs/common';
import { UsersServices } from './users.service';
import { UserController } from './users.controller';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersServices],
})
export class UserModule {}
