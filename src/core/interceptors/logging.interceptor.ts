import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name, { timestamp: true });

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const before = Date.now();

    return next.handle().pipe(
      tap(() => {
        const after = Date.now();
        const diff = +after - +before;

        const contextType = context.getType();
        if (contextType === 'http') {
          const host = context.switchToHttp();

          const req = host.getRequest();
          const res = host.getResponse();
          const { url, method, params } = req;
          const { statusCode } = res;

          this.logger.log({
            apiMeta: {
              method,
              url,
              statusCode,
              params,
              diff,
            },
          });
        }
      }),
    );
  }
}
