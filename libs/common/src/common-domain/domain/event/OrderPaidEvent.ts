import { Order } from '@app/order-domain-core';
import { DomainEvent } from './DomainEvent';
import { OrderEvent } from './OrderEvent';

export class OrderPaidEvent extends OrderEvent {
  constructor(order: Order, createdAt: Date) {
    super(order, createdAt);
  }
}
