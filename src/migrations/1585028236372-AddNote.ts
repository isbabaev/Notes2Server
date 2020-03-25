import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNote1585028236372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`CREATE TABLE notes (
            id SERIAL PRIMARY KEY,
            name TEXT,
            notepad_id INTEGER REFERENCES notepads(id),
            created TIMESTAMP
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`DROP TABLE notes`);
    }

}
