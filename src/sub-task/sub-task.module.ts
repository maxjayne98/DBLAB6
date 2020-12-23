import { Module } from '@nestjs/common';
import { SubTaskService } from './sub-task.service';
import { SubTaskController } from './sub-task.controller';

@Module({
  providers: [SubTaskService],
  controllers: [SubTaskController]
})
export class SubTaskModule {}
