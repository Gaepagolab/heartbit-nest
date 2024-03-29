import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import { urlencoded, json } from 'body-parser';

import './utils/array';
import './utils/typeorm-extensions/select-query-builder';
import { AppModule } from './app.module';
import { activateSwaggerModule } from './utils/swagger/activate-swagger';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  activateSwaggerModule(app);

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors({ credentials: true, origin: true });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.use(cookieParser());
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
