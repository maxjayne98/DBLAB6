import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class SubTask extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  workDescription: string;

  @ManyToOne((type) => TaskEntity, (task) => task.subTasks)
  task: TaskEntity;
}
