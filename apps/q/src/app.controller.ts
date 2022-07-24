import { Bind, Controller, Dependencies, Get, Post, Request, UseGuards, Next, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { SetMetadata } from '@nestjs/common';
import { nextTick } from 'process';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {

  }
  @SkipAuth()
  @Post('auth/login')
  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Bind(Request())
  async login(req) {
    //console.log(req.user)
    //return req.user;
    return this.authService.login(req.user);
  }

  @SkipAuth()
  @Get('hi')
  getHello(): string {
    console.log('根')
    return this.appService.getHello();
  }

  @SkipAuth()
  @Get('doc*')
  docs(@Request() req) {
    console.log(req.path.replace(/\/docs/, ''))
    req.path = req.path.replace(/\/docs/, '')
    console.log(req.path)
    Next()
    return 'doscs';
  }


  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
