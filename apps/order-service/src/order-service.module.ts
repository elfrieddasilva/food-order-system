import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { OrderDomainModule } from './order-domain/order-domain.module';
import { OrderApplicationModule } from './order-application/order-application.module';
import { OrderContainerModule } from './order-container/order-container.module';
import { OrderDataaccessModule } from './order-dataaccess/order-dataaccess.module';
import { OrderMessagingModule } from './order-messaging/order-messaging.module';

@Module({
  imports: [OrderDomainModule, OrderApplicationModule, OrderContainerModule, OrderDataaccessModule, OrderMessagingModule],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
