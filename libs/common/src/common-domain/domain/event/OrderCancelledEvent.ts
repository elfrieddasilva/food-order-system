import { Order } from '@app/order-domain-core';
import { OrderEvent } from './OrderEvent';

export class OrderCancelledEvent extends OrderEvent {
  constructor(order: Order, createdAt: Date) {
    super(order, createdAt);
  }
}
