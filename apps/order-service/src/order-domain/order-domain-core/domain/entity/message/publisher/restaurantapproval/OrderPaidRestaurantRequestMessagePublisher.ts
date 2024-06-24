import { OrderPaidEvent } from "@app/common";
import { DomainEventPublisher } from "@app/common";

export abstract class OrderPaidRestaurantRequestMessagePublisher extends DomainEventPublisher<OrderPaidEvent> {
    
}