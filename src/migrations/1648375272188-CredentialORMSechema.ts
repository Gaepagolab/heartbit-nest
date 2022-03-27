import { MigrationInterface, QueryRunner } from 'typeorm';

export class CredentialORMSechema1648375272188 implements MigrationInterface {
  name = 'CredentialORMSechema1648375272188';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "coins" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_d4dbd2e22991a2d052634850eb8" UNIQUE ("name"), CONSTRAINT "PK_af01e5dcef2c05e6385611205c6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ohlcvs" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "datetime" character varying NOT NULL, "candleId" integer NOT NULL, "volume" double precision, "open" double precision, "close" double precision, "high" double precision, "low" double precision, CONSTRAINT "PK_ee0f874d7bc7726bd8302c543aa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "results" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "currentStart" character varying NOT NULL, "currentEnd" character varying NOT NULL, "findStart" character varying NOT NULL, "findEnd" character varying NOT NULL, CONSTRAINT "PK_e8f2a9191c61c15b627c117a678" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "candle_type_enum" AS ENUM('1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M')`,
    );
    await queryRunner.query(
      `CREATE TABLE "candles" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "type" "candle_type_enum" NOT NULL, "coinId" integer NOT NULL, "resultId" integer, CONSTRAINT "REL_81c8f163ac90a6cfb5a20c3f77" UNIQUE ("resultId"), CONSTRAINT "PK_51487d0946f705bd3df19d2f04e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "email" character varying NOT NULL, "isEmailConfirmed" boolean NOT NULL DEFAULT false, "name" character varying NOT NULL, "password" character varying, "isRegisteredWithGoogle" boolean NOT NULL DEFAULT false, "currentHashedRefreshToken" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "ohlcvs" ADD CONSTRAINT "FK_e0366421242ebff0e2ffb06c541" FOREIGN KEY ("candleId") REFERENCES "candles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "candles" ADD CONSTRAINT "FK_81c8f163ac90a6cfb5a20c3f775" FOREIGN KEY ("resultId") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "candles" ADD CONSTRAINT "FK_d438239f6b0fb01a4fe053426bc" FOREIGN KEY ("coinId") REFERENCES "coins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "candles" DROP CONSTRAINT "FK_d438239f6b0fb01a4fe053426bc"`);
    await queryRunner.query(`ALTER TABLE "candles" DROP CONSTRAINT "FK_81c8f163ac90a6cfb5a20c3f775"`);
    await queryRunner.query(`ALTER TABLE "ohlcvs" DROP CONSTRAINT "FK_e0366421242ebff0e2ffb06c541"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "candles"`);
    await queryRunner.query(`DROP TYPE "candle_type_enum"`);
    await queryRunner.query(`DROP TABLE "results"`);
    await queryRunner.query(`DROP TABLE "ohlcvs"`);
    await queryRunner.query(`DROP TABLE "coins"`);
  }
}
