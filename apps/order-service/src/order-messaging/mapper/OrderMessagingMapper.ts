import { OrderCreatedEvent } from "@app/common";
import { PaymentRequestAvroModel } from "apps/infrastructure/kafka/kafka-model/types/PaymentRequest.avsc";

export class OrderMessagingMapper {
    orderCreatedEventToPaymentRequestAvroModel(orderCreatedEvent: OrderCreatedEvent) : PaymentRequestAvroModel {
        
        
    }
}