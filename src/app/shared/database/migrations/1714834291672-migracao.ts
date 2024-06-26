import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracao1714834291672 implements MigrationInterface {
    name = 'Migracao1714834291672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks"."user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "dthr_register" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks"."Task" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "ind_active" boolean NOT NULL DEFAULT true, "id_user" character varying NOT NULL, "dthr_register" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_95d9364b8115119ba8b15a43592" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tasks"."Task" ADD CONSTRAINT "FK_70c6bf9ee0083ebce52efa46a7c" FOREIGN KEY ("id_user") REFERENCES "tasks"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks"."Task" DROP CONSTRAINT "FK_70c6bf9ee0083ebce52efa46a7c"`);
        await queryRunner.query(`DROP TABLE "tasks"."Task"`);
        await queryRunner.query(`DROP TABLE "tasks"."user"`);
    }

}
