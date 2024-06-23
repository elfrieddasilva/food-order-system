import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { OrderGlobalExceptionHandler } from './order-application/exception.handler';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalFilters(
    new OrderGlobalExceptionHandler()
  );
  app.useLogger(app.get(Logger));
  await app.listen(3000);
}
bootstrap();
