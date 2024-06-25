import { Module } from '@nestjs/common';
import { OrderOrmImplementation } from './order/adapter/OrderOrmImplementation';
import { OrderRepositoryImpl } from './order/adapter/OrderRepositoryImpl';
import { RestaurantRepositoryImpl } from './restaurant/adapter/RestaurantRepositoryImpl';
import { RestaurantOrmImplementation } from './restaurant/adapter/RestaurantOrmImplementation';
import { CustomerRepositoryImpl } from './customer/adapter/CustomerRepositoryImpl';
import { CustomerOrmImplementation } from './customer/adapter/CustomerOrmImplementation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/entity/OrderEntity';
import { RestaurantEntity } from './restaurant/entity/RestaurantEntity';
import { CustomerEntity } from './customer/entity/CustomerEntity';
import { OrderOrmRepository } from './order/repository/OrderOrmRepository';
import { RestaurantOrmRepository } from './restaurant/repository/RestaurantOrmRepository';
import { CustomerOrmRepository } from './customer/repository/CustomerOrmRepository';
import { CustomerRepository, OrderRepository, RestaurantRepository } from '@app/order-domain';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, RestaurantEntity, CustomerEntity]),
  ],
  providers: [
    {
    provide: OrderRepository,
    useClass: OrderRepositoryImpl
  },
  {
    provide: CustomerRepository,
    useClass: CustomerRepositoryImpl
  },
  {
    provide: RestaurantRepository,
    useClass: RestaurantRepositoryImpl
  },
]
})
export class OrderDataAccessModule {}
