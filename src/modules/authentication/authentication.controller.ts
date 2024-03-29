import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { Request } from 'express';

import { AuthenticationService } from './authentication.service';
import RequestWithUser from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import { JwtAuthenticationGuard } from './jwt-authentication.guard';
import { UsersService } from '../users/users.service';
import JwtRefreshGuard from './jwt-refresh.guard';
import { EmailConfirmationService } from '../emailConfirmation/emailConfirmation.service';
import RegisterFromClientDTO from './dto/registerFromClient.dto';
import CheckEmailDto from './dto/checkEmail.dto';

@Controller('authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    return user;
  }

  @Post('check-email')
  @HttpCode(200)
  async checkRegisteredEmail(@Body() checkEmailData: CheckEmailDto) {
    const registered = await this.usersService.checkRegisteredEmail(
      checkEmailData.email,
    );

    return { registered };
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Req() request: RequestWithUser) {
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(request.user.id);

    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return request.user;
  }

  @Post('register')
  @HttpCode(201)
  async register(
    @Body() registrationData: RegisterFromClientDTO,
    @Req() request: Request,
  ) {
    console.log({ registrationData });
    const { registerToken, ...withoutTokenRegisterationData } =
      registrationData;
    const email = await this.emailConfirmationService.decodedConfirmationToken(
      registerToken,
    );
    const user = await this.authenticationService.register({
      email,
      ...withoutTokenRegisterationData,
    });

    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(user.id);
    const { cookie: refreshTokenCookie, token: refreshToken } =
      this.authenticationService.getCookieWithJwtRefreshToken(user.id);
    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return user;
  }

  @Post('log-in')
  @UseGuards(LocalAuthenticationGuard)
  @HttpCode(200)
  async logIn(@Req() request: RequestWithUser) {
    const { user } = request;
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(user.id);
    const { cookie: refreshTokenCookie, token: refreshToken } =
      this.authenticationService.getCookieWithJwtRefreshToken(user.id);

    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return user;
  }

  @Post('log-out')
  @UseGuards(JwtAuthenticationGuard)
  @HttpCode(200)
  async logOut(@Req() request: RequestWithUser) {
    await this.usersService.removeRefreshToken(request.user.id);
    request.res.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookiesForLogOut(),
    );
  }
}
