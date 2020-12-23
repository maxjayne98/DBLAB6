import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({
    description: 'Enter Task Label > ',
    minLength: 3,
    maxLength: 50,
  })
  readonly name: string;
}
