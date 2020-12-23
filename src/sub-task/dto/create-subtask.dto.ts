import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateSubTaskDto {
  @ApiProperty({
    description: 'Enter Sub-Task > ',
    minLength: 3,
    maxLength: 500,
  })
  readonly description: string;
}
