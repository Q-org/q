import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useStaticAssets(join(__dirname, '../../../', 'w'));
  app.useStaticAssets(join(__dirname, '../../../w/build/', 'assets'));
  app.useStaticAssets(join(__dirname, '../../../w/', 'build/'));


  await app.listen(81);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
