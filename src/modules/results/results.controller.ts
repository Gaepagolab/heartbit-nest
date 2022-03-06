import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { CreateBulkResultsBody } from './protocols/create-bulk-results.body';

@SwaggerController('results')
export class ResultsController {
  @Post()
  async post(@Body() body: CreateBulkResultsBody) {
    return body;
  }
}
