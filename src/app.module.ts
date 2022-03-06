import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

import { AppController } from './app.controller';
import { ExceptionsLoggerFilter } from './core/exceptions/exception-logger.filter';

import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { EmailConfirmationModule } from './modules/emailConfirmation/emailConfirmation.module';
import { GoogleAuthenticationModule } from './modules/googleAuthentication/googleAuthentication.module';
import { CoinsModule } from './modules/coins/coins.module';
import { CandlesModule } from './modules/candles/candles.module';
import { OHLCVsModule } from './modules/ohlcvs/ohlcvs.module';
import { ResultsModule } from './modules/results/results.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number(),
        DB_URL: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
        EMAIL_CONFIRMATION_URL: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required(),
      }),
    }),
    AuthenticationModule,
    UsersModule,
    EmailConfirmationModule,
    GoogleAuthenticationModule,
    CoinsModule,
    CandlesModule,
    OHLCVsModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_PIPE, useFactory: () => new ValidationPipe({ transform: true }) },
    { provide: APP_FILTER, useClass: ExceptionsLoggerFilter },
  ],
})
export class AppModule {}
