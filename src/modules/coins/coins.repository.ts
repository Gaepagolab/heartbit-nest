import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import CoinEntity from './coin.entity';
import { Coin } from './coin.model';

@Injectable()
export class CoinsRepository extends BaseRepository<CoinEntity, Coin> {
  constructor(
    @InjectRepository(CoinEntity)
    private coinsRepository: Repository<CoinEntity>,
  ) {
    super(coinsRepository);
  }
}
