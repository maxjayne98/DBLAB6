import { Length, IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateUserDto {
  @ApiProperty({
    description: 'Enter Your Name > ',
    minLength: 3,
    maxLength: 10,
  })
  readonly name: string;

  @ApiProperty({
    description: 'Enter Your Password > ',
    minLength: 2,
    maxLength: 10,
  })
  readonly password: string;
  readonly books: number[];
}
