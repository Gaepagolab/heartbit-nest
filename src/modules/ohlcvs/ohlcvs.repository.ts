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
}
