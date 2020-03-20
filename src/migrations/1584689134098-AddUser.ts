import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1584689134098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`create table users (
            id serial primary key,
            email text unique,
            password text,
            created timestamp
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query('drop table users');
    }
}
