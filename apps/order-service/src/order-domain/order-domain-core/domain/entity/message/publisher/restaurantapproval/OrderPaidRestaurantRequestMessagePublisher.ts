import { OrderPaidEvent } from "@app/common";
import { DomainEventPublisher } from "@app/common";

export interface OrderPaidRestaurantRequestMessagePublisher extends DomainEventPublisher<OrderPaidEvent> {
    
}