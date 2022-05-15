import { FindConditions } from 'typeorm';

import FinanceEntity from '../finance.entity';
import { FinanceType } from '../types/finance-type';

export class FinanceFilterDto {
  static from(options: { type: FinanceType }): FinanceFilterDto {
    const it = new FinanceFilterDto();

    if (options.type !== undefined) it.type = options.type;

    return it;
  }

  type?: FinanceType;

  toWhereLiteral() {
    const findCondition: FindConditions<FinanceEntity> = {};

    if (this.type !== undefined) {
      findCondition.type = this.type;
    }

    return { where: findCondition };
  }
}
