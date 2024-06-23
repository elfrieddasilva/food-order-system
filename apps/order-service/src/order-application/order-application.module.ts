import { Module } from '@nestjs/common';
import { OrderController } from './order-application.controller';
import {
  OrderApplicationServiceImpl,
  OrderCreateCommandHandler,
  OrderCreateHelper,
  OrderDataMapper,
  OrderTrackCommandHandler,
} from '@app/order-domain';
import { LoggerModule } from '@app/common';

@Module({
  imports: [LoggerModule],
  controllers: [OrderController],
  providers: [
    OrderCreateCommandHandler,
    OrderTrackCommandHandler,
    OrderApplicationServiceImpl,
    OrderCreateHelper,
    OrderDataMapper,
  ],
  exports: [OrderApplicationServiceImpl],
})
export class OrderApplicationModule {}
