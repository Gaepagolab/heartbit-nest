import { FindConditions, SelectQueryBuilder } from 'typeorm';
import OHLCVEntity from '../ohlcv.entity';

export class OHLCVFilterDto {
  static from(options: { candleId: number; from?: Date; to?: Date }): OHLCVFilterDto {
    const it = new OHLCVFilterDto();

    it.candleId = options.candleId;
    if (options.from !== undefined) it.from = options.from;
    if (options.to !== undefined) it.to = options.to;

    return it;
  }

  candleId: number;
  from?: Date;
  to?: Date;

  private filterByDateRange(builder: SelectQueryBuilder<OHLCVEntity>, from?: Date, to?: Date) {
    if (from === undefined || to === undefined) {
      return builder;
    }

    return builder.andWhere(`${builder.alias}.datetime BETWEEN '${from}' AND '${to}'`);
  }

  toWhereLiteral() {
    const findCondition: FindConditions<OHLCVEntity> = {};

    findCondition.candleId = this.candleId;

    return {
      where: (qb: SelectQueryBuilder<OHLCVEntity>) => {
        qb.where(findCondition)
          // line break
          .apply(this.filterByDateRange, this.from, this.to);
      },
    };
  }
}
