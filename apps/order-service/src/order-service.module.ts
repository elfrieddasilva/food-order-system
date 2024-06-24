import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderApplicationModule } from './order-application/order-application.module';
import { OrderContainerModule } from './order-container/order-container.module';
import { OrderDataAccessModule } from './order-dataaccess/order-dataaccess.module';
import { OrderMessagingModule } from './order-messaging/order-messaging.module';

@Module({
  imports: [OrderApplicationModule, OrderContainerModule, OrderDataAccessModule, OrderMessagingModule],
  controllers: [OrderServiceController],
  providers: [],
})
export class OrderServiceModule {}
