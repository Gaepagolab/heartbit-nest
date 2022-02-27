import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialORMSchema1645861999083 implements MigrationInterface {
  name = 'CreateInitialORMSchema1645861999083';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "public"."candle_type_enum" AS ENUM 
        ('1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M')
    `);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "coins" 
        (
            "id"                SERIAL                      NOT NULL,
            "name"              VARCHAR(255)                NOT NULL UNIQUE,
            "createdAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            "updatedAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "candles" 
        (
            "id"                SERIAL                      NOT NULL,
            "coinId"            integer                     REFERENCES
            "coins" ("id")                                  ON DELETE CASCADE ON UPDATE CASCADE,
            "type"              "public"."candle_type_enum" NOT NULL,
            "createdAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            "updatedAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "ohlcvs"
        (
            "id"                SERIAL                      NOT NULL, 
            "volume"            double precision,
            "open"              double precision,
            "close"             double precision,
            "high"              double precision,
            "low"               double precision,
            "datetime"          character varying,
            "candleId"          integer                     REFERENCES
            "candles" ("id")                                ON DELETE CASCADE ON UPDATE CASCADE,
            "createdAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            "updatedAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "users"
        (
            "id"                        SERIAL              NOT NULL,
            "email"                     VARCHAR(255)        NOT NULL UNIQUE, 
            "isEmailConfirmed"          BOOLEAN             DEFAULT  false,
            "isRegisteredWithGoogle"    BOOLEAN             DEFAULT  false,
            "name"                      VARCHAR(255),
            "password"                  VARCHAR(255),
            "currentHashedRefreshToken" VARCHAR(255)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "ohlcvs"`);
    await queryRunner.query(`DROP TABLE "candles"`);
    await queryRunner.query(`DROP TABLE "coins"`);
    await queryRunner.query(`DROP TYPE "public"."candle_type_enum"`);
  }
}
