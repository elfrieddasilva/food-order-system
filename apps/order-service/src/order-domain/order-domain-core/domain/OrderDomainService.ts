import { OrderCreatedEvent } from '@app/common';
import { Order } from './entity/Order';
import { Restaurant } from './entity/Restaurant';
import { OrderPaidEvent } from '@app/common';
import { OrderCancelledEvent } from '@app/common';

export abstract class OrderDomainService {
  abstract  validateAndInitiateOrder(
    order: Order,
    restaurant: Restaurant,
  ): OrderCreatedEvent;
  abstract payOrder(order: Order): OrderPaidEvent;
  abstract approveOrder(order: Order): void;
  abstract cancelOrderPayment(
    order: Order,
    failureMessages: string[],
  ): OrderCancelledEvent;
  abstract cancelOrder(order: Order, failureMessages: string[]): void;
}
