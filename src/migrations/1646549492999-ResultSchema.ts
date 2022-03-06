import { MigrationInterface, QueryRunner } from 'typeorm';

export class ResultSchema1646549492999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "results"
        (
            "id"                SERIAL                      NOT NULL,
            "accuracy"          integer                     NOT NULL,
            "currentStart"      character varying           NOT NULL,
            "currentEnd"        character varying           NOT NULL,
            "findStart"         character varying           NOT NULL,
            "findEnd"           character varying           NOT NULL,
            "candleId"          integer                     REFERENCES
            "candles" ("id")                                ON DELETE CASCADE ON UPDATE CASCADE,
            "createdAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            "updatedAt"         TIMESTAMP WITH TIME ZONE    NOT NULL DEFAULT now(),
            PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "results"`);
  }
}
