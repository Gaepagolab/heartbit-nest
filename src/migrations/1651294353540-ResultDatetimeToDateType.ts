import { MigrationInterface, QueryRunner } from 'typeorm';

export class ResultDatetimeToDateType1651294353540 implements MigrationInterface {
  name = 'ResultDatetimeToDateType1651294353540';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "results" ALTER COLUMN "currentStart" TYPE TIMESTAMP WITH TIME ZONE USING "currentStart"::timestamp with time zone`,
    );
    await queryRunner.query(
      `ALTER TABLE "results" ALTER COLUMN "currentEnd" TYPE TIMESTAMP WITH TIME ZONE USING "currentEnd"::timestamp with time zone`,
    );
    await queryRunner.query(
      `ALTER TABLE "results" ALTER COLUMN "findStart" TYPE TIMESTAMP WITH TIME ZONE USING "findStart"::timestamp with time zone`,
    );
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findStart" DROP NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "results" ALTER COLUMN "findEnd" TYPE TIMESTAMP WITH TIME ZONE USING "findEnd"::timestamp with time zone`,
    );
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findEnd" DROP NOT NULL`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findEed" TYPE character varying`);
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findEed" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findStart" TYPE character varying`);
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "findStart" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "currentEnd" TYPE character varying`);
    await queryRunner.query(`ALTER TABLE "results" ALTER COLUMN "currentStart" TYPE character varying`);
  }
}
