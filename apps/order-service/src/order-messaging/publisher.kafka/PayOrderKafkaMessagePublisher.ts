import { OrderPaidEvent } from "@app/common";
import { OrderPaidRestaurantRequestMessagePublisher } from "@app/order-domain";
import { Injectable, Logger } from "@nestjs/common";
import { RestaurantApprovalRequestAvroModel } from "apps/infrastructure/kafka/kafka-model/types/RestaurantApprovalRequest.avsc";
import { KafkaProducer } from "apps/infrastructure/kafka/kafka-producer/service/KafkaProducer";
import { OrderMessagingDataMapper } from "../mapper/OrderMessagingDataMapper";
import { OrderServiceConfigData } from "@app/order-domain";

@Injectable()
export class PayOrderKafkaMessagePublisher implements OrderPaidRestaurantRequestMessagePublisher {
    private logger = new Logger(PayOrderKafkaMessagePublisher.name);

    constructor(
        private readonly orderMessagingDataMapper: OrderMessagingDataMapper,
        private readonly orderServiceConfigData: OrderServiceConfigData,
        private readonly kafkaProducer: KafkaProducer<
          string,
          RestaurantApprovalRequestAvroModel
        >,
      ) {}

    async publish(domainEvent: OrderPaidEvent) {
      const orderId = domainEvent.getOrder().getId().getValue().toString();
      try {
        const restaurantApprovalRequestAvroModel = this.orderMessagingDataMapper.orderPaidEventToRestaurantRequestAvroModel(domainEvent);
        await this.kafkaProducer.send(
          this.orderServiceConfigData.getRestaurantApprovalRequestTopicName(),
          orderId,
          restaurantApprovalRequestAvroModel
        );
        this.logger.log(
          `RestaurantApprovalRequestAvroModel sent to Kafka for order id: ${restaurantApprovalRequestAvroModel.getOrderId()}`,
        );
      } catch (error) {
        this.logger.error(
          `Error while sending RestaurantApprovalRequestAvroModel message to Kafka with order id: ${orderId}, error: ${error}`,
        );
        throw error;
      }

        
    }

}