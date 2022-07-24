import { NestFactory } from '@nestjs/core';
import { GModule } from './g.module';

async function bootstrap() {
  const app = await NestFactory.create(GModule);
  await app.listen(3000);
}
bootstrap();
