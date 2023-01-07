import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Worker {
  @Column()
  service_type: string;

  @Column()
  service_detail: string;

  @Column('decimal')
  rate_hour: number;

  @OneToOne(() => User, {
    cascade: true,
  })
  @JoinColumn()
  user: User;
}
