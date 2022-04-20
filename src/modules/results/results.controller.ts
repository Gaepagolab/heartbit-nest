import { Body, Patch, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { CreateResultBody } from './protocols/create-result.body';
import { ResultService } from './results.service';

@SwaggerController('results')
export class ResultsController {
  constructor(
    // line break
    private readonly resultsService: ResultService,
  ) {}

  @Post()
  async post(@Body() body: CreateResultBody) {
    const result = await this.resultsService.create(body.candleId, body.toDto());

    return result;
  }

  @Patch()
  async patch(@Body() body: CreateResultBody) {
    const result = await this.resultsService.update(body.candleId, body.toDto());

    return result;
  }
}
