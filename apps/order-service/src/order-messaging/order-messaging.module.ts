import { Module } from '@nestjs/common';
import { PaymentResponseKafkaResponseListener } from './listener.kafka/PaymentResponseKafkaResponseListener';
import { RestaurantApprovalResponseKafkaListener } from './listener.kafka/RestaurantApprovalResponseKafkaListener';
import { CancelOrderKafkaMessagePublisher } from './publisher.kafka/CancelOrderKafkaMessagePublisher';
import { CreateOrderKafkaMessagePublisher } from './publisher.kafka/CreateOrderKafkaMessagePublisher';
import { PayOrderKafkaMessagePublisher } from './publisher.kafka/PayOrderKafkaMessagePublisher';

@Module({
  imports: [
    PaymentResponseKafkaResponseListener,
    RestaurantApprovalResponseKafkaListener,
    CancelOrderKafkaMessagePublisher,
    CreateOrderKafkaMessagePublisher,
    PayOrderKafkaMessagePublisher,
  ],
  exports: [
    PaymentResponseKafkaResponseListener,
    RestaurantApprovalResponseKafkaListener,
    CancelOrderKafkaMessagePublisher,
    CreateOrderKafkaMessagePublisher,
    PayOrderKafkaMessagePublisher,
  ],
})
export class OrderMessagingModule {}
