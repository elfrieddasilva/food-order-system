import { Module } from '@nestjs/common';
import { OrderController } from './order-application.controller';
import {
  OrderApplicationService,
  OrderApplicationServiceImpl,
  OrderCreateCommandHandler,
  OrderCreateHelper,
  OrderDataMapper,
  OrderDomainService,
  OrderDomainServiceImpl,
  OrderTrackCommandHandler,
} from '@app/order-domain';
import { LoggerModule } from '@app/common';

@Module({
  imports: [LoggerModule],
  controllers: [OrderController],
  providers: [
    OrderCreateCommandHandler,
    OrderTrackCommandHandler,
    {
      provide:OrderApplicationService,
      useClass: OrderApplicationServiceImpl
    },
    {
      provide: OrderDomainService,
      useClass: OrderDomainServiceImpl,
    },
    OrderCreateHelper,
    OrderDataMapper,
  ],
  exports: [],
})
export class OrderApplicationModule {}
