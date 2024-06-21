import { OrderCancelledEvent } from "@app/common";
import { DomainEventPublisher } from "@app/common";

export interface OrderCancelledPaymentRequestMessagePublisher extends DomainEventPublisher<OrderCancelledEvent> {
    
}