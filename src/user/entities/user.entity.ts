import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from 'typeorm';
import { RoleType } from '../constants/role-type.constant';


@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable: true})
    public firstname: string;

    @Column({nullable: true})
    public lastname: string;

    @Column({nullable: true})
    public username: string;

    @Column()
    public password: string

    @Column({type: 'enum', enum: RoleType, default: RoleType.USER})
    public role: RoleType

    @CreateDateColumn()
    public createdAt: Date;





}

