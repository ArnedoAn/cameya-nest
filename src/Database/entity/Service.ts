import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './User';
import { Worker } from './Worker';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date_programed: string;

  @Column()
  address: string;

  @Column('date')
  date_assignment: Date;

  @Column('decimal')
  hours: number;

  @Column('decimal')
  total: number;

  @Column()
  client_id: string;

  @Column()
  worker_id: string;

  @Column()
  request_status: string;

  @Column()
  service_status: string;

  @Column('decimal')
  client_score: number;

  @Column('decimal')
  worker_score: number;

  @Column()
  service_description: string;
}
