import * as config from 'config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('AppBootstrap');
  const loggerConfig = config.get('logger');

  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule, {
    logger: loggerConfig.enabled ? logger : false,
  });

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
