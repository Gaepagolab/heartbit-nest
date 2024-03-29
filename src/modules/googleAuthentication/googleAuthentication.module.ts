import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from '../users/users.module';
import { GoogleAuthenticationService } from './googleAuthentication.service';
import { GoogleAuthenticationController } from './googleAuthentication.controller';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports: [ConfigModule, UsersModule, AuthenticationModule],
  providers: [GoogleAuthenticationService],
  controllers: [GoogleAuthenticationController],
  exports: [],
})
export class GoogleAuthenticationModule {}
