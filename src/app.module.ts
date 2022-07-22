import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './common/cats/cats.module';

import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { JavaModule } from './java/java.module';




@Module({
  imports: [AuthModule, UsersModule, CatsModule, JavaModule],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
})
export class AppModule { }
