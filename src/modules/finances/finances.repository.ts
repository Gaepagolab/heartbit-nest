import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import FinanceEntity from './finance.entity';
import { Finance } from './finance.model';

@Injectable()
export class FinancesRepository extends BaseRepository<FinanceEntity, Finance> {
   protected findOneRelations = ['finances'];

  constructor(
    @InjectRepository(FinanceEntity)
    private financessRepository: Repository<FinanceEntity>,
  ) {
    super(financessRepository);
  }

   async findByType(type: string):  Promise<Finance[]> {
     const finance = await this.financessRepository.find({
       where: {type},
       relations: this.findOneRelations,
     });

     if (!finance) throw new NotFoundException('finance not found');
     return finance.toModels();
   }

}
