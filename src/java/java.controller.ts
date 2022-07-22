import { Controller, Get, SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('qianxue_cb/getExpParameterAll')
export class JavaController {
  @SkipAuth()
  @Get()
  findAll() {
    console.log('getExpParameterAll')
    return 'This action returns all cats';
  }
}