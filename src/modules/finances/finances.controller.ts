import { SwaggerController } from '../../core/decorators/controller.decorator';
import { FinancesService } from './finances.service';

@SwaggerController('finances')
export class FinancesController {
  constructor(
    // line break
    private readonly financesService: FinancesService,
  ) {}
}
