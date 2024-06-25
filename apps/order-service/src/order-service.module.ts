import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderApplicationModule } from './order-application/order-application.module';
import { OrderContainerModule } from './order-container/order-container.module';
import { OrderDataAccessModule } from './order-dataaccess/order-dataaccess.module';
import { OrderMessagingModule } from './order-messaging/order-messaging.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order-application/order-application.controller';
import { OrderApplicationService, OrderApplicationServiceImpl } from './order-domain';
import { OrderEntity } from './order-dataaccess/order/entity/OrderEntity';
import { RestaurantEntity } from './order-dataaccess/restaurant/entity/RestaurantEntity';
import { CustomerEntity } from './order-dataaccess/customer/entity/CustomerEntity';
import { OrderAddressEntity } from './order-dataaccess/order/entity/OrderAddressEntity';
import { OrderEntityId } from './order-dataaccess/order/entity/OrderEntityId';
import { OrderItemEntity } from './order-dataaccess/order/entity/OrderItemEntity';

@Module({
  imports: [
    OrderApplicationModule,
    OrderContainerModule,
    OrderDataAccessModule,
    OrderMessagingModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgresql@P@SSW0RD",
      entities: [OrderEntity, RestaurantEntity, CustomerEntity, OrderAddressEntity, OrderItemEntity]
    }),
  ],
  controllers: [],
  providers: [],
})
export class OrderServiceModule {}
