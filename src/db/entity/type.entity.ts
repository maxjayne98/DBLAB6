import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export default class TypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
