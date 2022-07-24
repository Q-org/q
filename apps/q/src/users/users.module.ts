import { UsersService } from './users.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    providers: [UsersService,],
    exports: [UsersService],
})
export class UsersModule { }
