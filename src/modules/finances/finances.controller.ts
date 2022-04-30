import { Get } from '@nestjs/common';
import { SwaggerController } from '../../core/decorators/controller.decorator';
import { Finance } from './finance.model';
import { FinancesService } from './finances.service';

@SwaggerController('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Get()
  async getAll(): Promise<Finance[]> {
    return await this.financesService.findAll();
  }
}
