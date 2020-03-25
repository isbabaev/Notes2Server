import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    schema: 'public',
    name: 'notes'
})
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    notepad_id: number;

    @Column()
    created: string;
}