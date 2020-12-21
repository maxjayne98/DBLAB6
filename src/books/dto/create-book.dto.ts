import { Length, IsOptional, Min, IsNumber, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateBookDto {
  @ApiProperty({
    description: 'Enter Book Name > ',
    minLength: 3,
    maxLength: 50,
  })
  readonly name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Enter Book OwnerID > ',
  })
  readonly userID: number;

  @IsNumber({}, { each: true })
  @ApiProperty({
    description: 'Enter Book GenersID > ',
  })
  readonly genreIDs: number[];
}
