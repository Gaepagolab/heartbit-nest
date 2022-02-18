import { NestFactory, Reflector } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';

import { AppModule } from './app.module';
import { activateSwaggerModule } from './utils/swagger/activate-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  activateSwaggerModule(app);

  app.enableCors({ credentials: true, origin: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
