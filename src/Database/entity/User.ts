import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn()
    dni: string;

    @Column()
    dni_type: string;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @PrimaryColumn()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    profile_picture: string;

    @Column('date')
    birth_date: Date;

    @Column('decimal')
    score: number;



}
