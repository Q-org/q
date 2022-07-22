import { Bind, Controller, Dependencies, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller()
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
  @Get()
  getHello(): string {
    console.log('根')
    return this.appService.getHello();
  }


  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
