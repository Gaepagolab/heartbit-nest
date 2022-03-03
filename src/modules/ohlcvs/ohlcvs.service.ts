import { Injectable } from '@nestjs/common';

import { OHLCV } from './ohlcv.model';
import { CreateOHLCVDto } from './dtos/create-ohlcv.dto';
import { OHLCVsRepository } from './ohlcvs.repository';

@Injectable()
export class OHLCVsService {
  constructor(private readonly ohlcvsRepository: OHLCVsRepository) {}

  private guardOfCreateBulkForBelongedSameCandle(dtos: CreateOHLCVDto[]) {
    const firstCandleId = dtos.find((dto) => dto.candleId !== undefined)?.candleId;
    if (firstCandleId === undefined) {
      throw new Error('unimplemented for OHLCVsService.createBulk for undefined candle.');
    }

    dtos.forEach((dto) => {
      if (dto.candleId !== firstCandleId) {
        throw new Error('unimplemented for OHLCVsService.createBulk for belong in multiple candle.');
      }
    });

    return firstCandleId;
  }

  async createBulk(dtos: CreateOHLCVDto[]): Promise<OHLCV[]> {
    console.log('guard Invalid');
    this.guardOfCreateBulkForBelongedSameCandle(dtos);
    console.log('guard valid');
    return await this.ohlcvsRepository.createBulk(dtos);
  }
}
