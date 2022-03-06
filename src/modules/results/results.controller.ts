import { Post } from '@nestjs/common';
import { SwaggerController } from '../../core/decorators/controller.decorator';

@SwaggerController('results')
export class ResultsController {
  @Post()
  async post() {
    return 'hi';
  }
}
