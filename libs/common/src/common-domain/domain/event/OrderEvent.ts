import { Order } from '@app/order-domain-core';
import { DomainEvent } from './DomainEvent';

export abstract class OrderEvent implements DomainEvent<Order> {
  private readonly order: Order;
  private readonly createdAt: Date;

  constructor(order: Order, createdAt: Date) {
    this.createdAt = createdAt;
    this.order = order;
  }

  getOrder() {
    return this.order;
  }

  getCreatedAt() {
    return this.createdAt;
  }

}
