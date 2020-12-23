import { type } from 'os';
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
export default class LabelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => TaskEntity, (task) => task.labels)
  task: TaskEntity;
}
