import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({
    description: 'Enter Genre Type > ',
    minLength: 3,
    maxLength: 50,
  })
  readonly type: string;
}
