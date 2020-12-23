import { Length, IsOptional, Min, IsNumber, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTaskDto {
  @ApiProperty({
    description: 'Enter Task OwnerID > ',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Enter Task OwnerID > ',
  })
  userID: number;

  @IsNumber()
  @ApiProperty({
    description: 'Enter Task TypeID > ',
  })
  typeID: number;

  @IsNumber({}, { each: true })
  @ApiProperty({
    description: 'Enter Task LabelIDs **its integer** > ',
  })
  labelIDs: number[];

  @IsNumber({}, { each: true })
  @ApiProperty({
    description: 'Enter Task SubTaskID **its integer** > ',
  })
  subTaskIDs: number[];

  @ApiProperty({
    description: 'Enter Task Description > ',
  })
  description: string;
}
