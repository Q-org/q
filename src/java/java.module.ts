import { Module } from '@nestjs/common';
import { JavaService } from './java.service';
import { JavaController } from './java.controller';

@Module({
  controllers: [JavaController],
  providers: [JavaService]
})
export class JavaModule {}
