import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import OHLCVEntity from './ohlcv.entity';
import { OHLCV } from './ohlcv.model';

@Injectable()
export class OHLCVsRepository extends BaseRepository<OHLCVEntity, OHLCV> {
  constructor(
    @InjectRepository(OHLCVEntity)
    private ohlcvsRepository: Repository<OHLCVEntity>,
  ) {
    super(ohlcvsRepository);
  }

  async findByCandleId(candleId: number): Promise<OHLCV[]> {
    const results = await this.ohlcvsRepository.find({
      select: ['id', 'open', 'close', 'datetime', 'high', 'low', 'volume'],
      where: { candleId },
    });

    return results.toModels();
  }
}
