import { Controller, Get, Redirect } from '@nestjs/common';

import { Public } from './modules/authentication/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  @Redirect('api')
  redirect() {
    return 'redirect to /api';
  }
}
