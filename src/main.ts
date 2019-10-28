import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('AppBootstrap');

  const app = await NestFactory.create(AppModule);

  const port = 3000;
  await app.listen(3000);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
