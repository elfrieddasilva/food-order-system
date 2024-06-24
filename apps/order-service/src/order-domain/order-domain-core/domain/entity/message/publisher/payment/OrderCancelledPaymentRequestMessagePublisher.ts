import { OrderCancelledEvent } from "@app/common";
import { DomainEventPublisher } from "@app/common";

export abstract class OrderCancelledPaymentRequestMessagePublisher extends DomainEventPublisher<OrderCancelledEvent> {
    
}