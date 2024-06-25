import { OrderCreatedEvent } from '@app/common';
import { OrderCreatedPaymentRequestMessagePublisher } from '@app/order-domain';
import { Injectable, Logger } from '@nestjs/common';
import { OrderMessagingDataMapper } from '../mapper/OrderMessagingDataMapper';
import { OrderServiceConfigData } from '@app/order-domain';
import { KafkaProducer } from 'apps/infrastructure/kafka/kafka-producer/service/KafkaProducer';
import { PaymentRequestAvroModel } from 'apps/infrastructure/kafka/kafka-model/types';


export class CreateOrderKafkaMessagePublisher
  implements OrderCreatedPaymentRequestMessagePublisher
{
  private logger = new Logger(CreateOrderKafkaMessagePublisher.name);
  constructor(
    private readonly orderMessagingDataMapper: OrderMessagingDataMapper,
    private readonly orderServiceConfigData: OrderServiceConfigData,
    private readonly kafkaProducer: KafkaProducer<
      string,
      PaymentRequestAvroModel
    >,
  ) {}

  async publish(domainEvent: OrderCreatedEvent) {
    const orderId = domainEvent.getOrder().getId().getValue().toString();
    this.logger.log(`Received OrderCreatedEvent for order id: ${orderId}`);
    try {
      const paymentRequestAvroModel =
        this.orderMessagingDataMapper.orderCreatedEventToPaymentRequestAvroModel(
          domainEvent,
        );
      await this.kafkaProducer.send(
        this.orderServiceConfigData.getPaymentRequestTopicName(),
        orderId,
        paymentRequestAvroModel,
      );
      this.logger.log(
        `PaymentRequestAvroModel sent to Kafka for order id: ${paymentRequestAvroModel.getOrderId()}`,
      );
    } catch (error) {
      this.logger.error(
        `Error while sending PaymentRequestAvroModel message to Kafka with order id: ${orderId}, error: ${error}`,
      );
      throw error;
    }
  }
}
