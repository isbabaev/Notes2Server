import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserToNotepad1584859627165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`ALTER TABLE notepads 
        ADD COLUMN userId INTEGER REFERENCES users(id)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`ALTER TABLE notepads DROP COLUMN userId`);
    }

}
