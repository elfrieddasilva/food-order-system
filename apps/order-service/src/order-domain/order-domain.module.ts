import { Module } from "@nestjs/common";
import { OrderCreatedPaymentRequestMessagePublisher } from "./order-domain-core";
import { CreateOrderKafkaMessagePublisher } from "../order-messaging/publisher.kafka/CreateOrderKafkaMessagePublisher";

@Module({
    providers: [
        {
            provide: OrderCreatedPaymentRequestMessagePublisher,
            useClass: CreateOrderKafkaMessagePublisher
        }
    ]
})
export class OrderDomainModule {}