import { Controller, Get } from '@nestjs/common';
import { GService } from './g.service';

@Controller()
export class GController {
  constructor(private readonly gService: GService) {}

  @Get()
  getHello(): string {
    return this.gService.getHello();
  }
}
