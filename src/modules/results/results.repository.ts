import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import ResultEntity from './result.entity';
import { Result } from './result.model';

@Injectable()
export class ResultsRepository extends BaseRepository<ResultEntity, Result> {
  constructor(
    @InjectRepository(ResultEntity)
    private resultsRepository: Repository<ResultEntity>,
  ) {
    super(resultsRepository);
  }
}
