import { DomainEvent } from '@app/common';
import { OrderCreatedEvent } from '@app/common';

export interface OrderCreatedPaymentRequestMessagePublisher
  extends DomainEvent<OrderCreatedEvent> {
  publish(orderCreatedEvent: OrderCreatedEvent): void;
}
