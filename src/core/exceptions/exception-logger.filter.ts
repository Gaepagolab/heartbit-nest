import { ArgumentsHost, Catch, InternalServerErrorException, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionsLoggerFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(ExceptionsLoggerFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    this.logger.error('Exception thrown', exception);

    if (process.env.NODE_ENV !== 'production') {
      const error = exception as Error;
      if (error.name !== 'QueryFailedError') {
        super.catch(
          new InternalServerErrorException({
            message: error.message,
            detail: error,
          }),
          host,
        );
      } else {
        super.catch(exception, host);
      }
    } else {
      super.catch(exception, host);
    }
  }
}
