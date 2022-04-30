import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFinanceCredential1651298034574 implements MigrationInterface {
  name = 'AddFinanceCredential1651298034574';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "public"."finance_type_enum" AS ENUM('D', 'C')`);
    await queryRunner.query(
      `CREATE TABLE "finances" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "type" "public"."finance_type_enum" NOT NULL, "content" character varying, "twitterUrl" character varying, "githubUrl" character varying, "discordUrl" character varying, "logoImageUrl" character varying, "isDeleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_dd84717ec8f1c29d8dd8687b6fd" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "finances"`);
    await queryRunner.query(`DROP TYPE "public"."finance_type_enum"`);
  }
}
