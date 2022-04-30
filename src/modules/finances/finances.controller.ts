import { Body, Get, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { Finance } from './finance.model';
import { FinancesService } from './finances.service';
import { CreateFinanceBody } from './protocols/create-finance.body';

@SwaggerController('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Post()
  async post(@Body() body: CreateFinanceBody): Promise<Finance> {
    return await this.financesService.create(body.toDto());
  }

  @Get()
  async getAll(): Promise<Finance[]> {
    return await this.financesService.findAll();
  }
}
