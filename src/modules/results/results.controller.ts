import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { CreateBulkResultsBody } from './protocols/create-bulk-results.body';
import { ResultService } from './results.service';

@SwaggerController('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultService) {}

  @Post()
  async post(@Body() body: CreateBulkResultsBody) {
    return this.resultsService.createBulk(body.toDtos());
  }
}
