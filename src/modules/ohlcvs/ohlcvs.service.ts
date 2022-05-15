import { Injectable } from '@nestjs/common';

import { OHLCV } from './ohlcv.model';
import { CreateOHLCVDto } from './dtos/create-ohlcv.dto';
import { OHLCVsRepository } from './ohlcvs.repository';
import { UpdateOHLCVDto } from './dtos/update-ohlcv.dto';
import { OHLCVFilterDto } from './dtos/ohlcv.filter.dto';

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
    this.guardOfCreateBulkForBelongedSameCandle(dtos);
    return await this.ohlcvsRepository.createBulk(dtos);
  }

  async findAllByFilter(dto: OHLCVFilterDto): Promise<OHLCV[]> {
    return await this.ohlcvsRepository.findAllByFilter(dto);
  }

  async findByCandleId(candleId: number): Promise<OHLCV[]> {
    return await this.ohlcvsRepository.findByCandleId(candleId);
  }

  async findLastestByCandleId(candleId: number): Promise<OHLCV> {
    return await this.ohlcvsRepository.getLatestByCandleId(candleId);
  }

  async update(id: number, dto: UpdateOHLCVDto): Promise<OHLCV> {
    return await this.ohlcvsRepository.update(id, dto);
  }
}
