import { MigrationInterface, QueryRunner } from 'typeorm';

export class OHLCVDatetimeToDateType1651290487057 implements MigrationInterface {
  name = 'OHLCVDatetimeToDateType1651290487057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ohlcvs" ALTER COLUMN "datetime" TYPE TIMESTAMP WITH TIME ZONE USING "datetime"::timestamp with time zone`,
    );
    await queryRunner.query(`ALTER TABLE "ohlcvs" ALTER COLUMN "datetime" SET NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ohlcvs" ALTER COLUMN "datetime" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "ohlcvs" ALTER COLUMN "datetime" TYPE character varying`);
  }
}
