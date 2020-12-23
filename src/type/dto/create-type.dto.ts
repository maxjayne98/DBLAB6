import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTypeDto {
  @ApiProperty({
    description: 'Enter Task Type > ',
    minLength: 3,
    maxLength: 50,
  })
  readonly type: string;
}
