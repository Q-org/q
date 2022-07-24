import { Module } from '@nestjs/common';
import { GController } from './g.controller';
import { GService } from './g.service';

@Module({
  imports: [],
  controllers: [GController],
  providers: [GService],
})
export class GModule {}
