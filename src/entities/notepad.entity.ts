import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({
    schema: 'public',
    name: 'notepads'
})
export class Notepad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;

    @Column()
    created: string;
}