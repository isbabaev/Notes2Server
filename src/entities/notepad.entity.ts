import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    created: string;
}