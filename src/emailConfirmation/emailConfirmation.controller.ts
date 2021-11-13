import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';

import { EmailConfirmationService } from './emailConfirmation.service';
import ConfirmEmailDto from './dto/confirmEmail.dto';
import { JwtAuthenticationGuard } from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';
import VerificationDto from './dto/verificationEmail.dto';

@Controller('email-confirmation')
@UseInterceptors(ClassSerializerInterceptor)
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post('confirm')
  async confirm(@Body() confirmationData: ConfirmEmailDto) {
    const email = await this.emailConfirmationService.decodedConfirmationToken(
      confirmationData.token,
    );
    await this.emailConfirmationService.confirmEmail(email);
  }

  @Post('send-verification-link')
  async sendVerificationLink(@Body() verificationData: VerificationDto) {
    await this.emailConfirmationService.sendVerificationLink(
      verificationData.email,
    );
  }

  @Post('resend-confirmation-link')
  @UseGuards(JwtAuthenticationGuard)
  async resendConfirmationLink(@Req() request: RequestWithUser) {
    await this.emailConfirmationService.resendConfirmationLink(request.user.id);
  }
}
