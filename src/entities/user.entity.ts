import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    schema: 'public',
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    created: string;
}