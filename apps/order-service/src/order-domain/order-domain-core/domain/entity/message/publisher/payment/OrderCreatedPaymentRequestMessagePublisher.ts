import { DomainEvent } from '@app/common';
import { OrderCreatedEvent } from '@app/common';

export abstract class OrderCreatedPaymentRequestMessagePublisher
  extends DomainEvent<OrderCreatedEvent> {
  abstract publish(orderCreatedEvent: OrderCreatedEvent): Promise<void>;
}
