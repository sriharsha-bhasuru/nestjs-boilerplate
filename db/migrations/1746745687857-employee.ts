import { MigrationInterface, QueryRunner } from "typeorm";

export class Employee1746745687857 implements MigrationInterface {
    name = 'Employee1746745687857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" character varying(10) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "email" citext NOT NULL, "created_by" character varying(255) NOT NULL, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL, "modified_by" character varying(255) NOT NULL, "modified_date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email"), CONSTRAINT "CHK_55a8c76a6e19f063189eec3ab4" CHECK (char_length(email) <= 50), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
