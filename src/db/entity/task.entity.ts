import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import TypeEntity from './type.entity';
import SubTask from './subtask.entity';
import LabelEntity from './label.entity';
import UserEntity from './user.entity';

@Entity()
export default class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 800 })
  description: string;

  @OneToMany((type) => SubTask, (item) => item.task)
  subTasks: SubTask[];

  @OneToOne((type) => TypeEntity)
  @JoinColumn()
  type: TypeEntity;

  @ManyToMany((type) => LabelEntity)
  @JoinTable()
  labels: LabelEntity[];

  @ManyToOne((type) => UserEntity, (user) => user.tasks, {
    eager: true,
  })
  user: UserEntity;
}
