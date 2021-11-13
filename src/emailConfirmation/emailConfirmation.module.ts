import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { EmailModule } from '../email/email.module';
import { UsersModule } from '../users/users.module';
import { EmailConfirmationService } from './emailConfirmation.service';
import { EmailConfirmationController } from './emailConfirmation.controller';

@Module({
  imports: [ConfigModule, EmailModule, JwtModule.register({}), UsersModule],
  providers: [EmailConfirmationService],
  exports: [EmailConfirmationService],
  controllers: [EmailConfirmationController],
})
export class EmailConfirmationModule {}
