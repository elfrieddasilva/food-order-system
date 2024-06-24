import {
  Order,
  RestaurantApprovalResponseMessageListener,
} from '@app/order-domain';
import { Injectable, Logger } from '@nestjs/common';
import { KafkaConsumer } from 'apps/infrastructure/kafka/kafka-consumer/KafkaConsumer';
import { RestaurantApprovalResponseAvroModel } from 'apps/infrastructure/kafka/kafka-model/types/RestaurantApprovalResponse.avsc';
import { OrderMessagingDataMapper } from '../mapper/OrderMessagingDataMapper';
import { OrderApprovalStatus } from '@app/common';

@Injectable()
export class RestaurantApprovalResponseKafkaListener
  implements KafkaConsumer<RestaurantApprovalResponseAvroModel>
{
  private readonly logger = new Logger(
    RestaurantApprovalResponseKafkaListener.name,
  );
  constructor(
    private readonly restaurantApprovalResponseMessageListener: RestaurantApprovalResponseMessageListener,
    private readonly orderMessagingDataMapper: OrderMessagingDataMapper,
  ) {}

  async receive(
    messages: RestaurantApprovalResponseAvroModel[],
    keys: string[],
    partitions: number[],
    offsets: number[],
  ) {
    this.logger.log(
      `${messages.length} number of restaurant approval responses received with keys:${keys.toString()}, partitions:${partitions.toString()} and offsets:${offsets.toString()}`,
    );

    messages.forEach(async (restaurantApprovalRequestAvroModel) => {
      if (
        OrderApprovalStatus.APPROVED ===
        restaurantApprovalRequestAvroModel.getOrderApprovalStatus()
      ) {
        this.logger.log(
          `Processing approved order for order id: ${restaurantApprovalRequestAvroModel.getOrderId()}`,
        );
        await this.restaurantApprovalResponseMessageListener.orderApproved(
          this.orderMessagingDataMapper.approvalResponseAvroModelToRestaurantApprovalResponse(
            restaurantApprovalRequestAvroModel,
          ),
        );
      } else if (
        OrderApprovalStatus.REJECTED ===
        restaurantApprovalRequestAvroModel.getOrderApprovalStatus()
      ) {
        this.logger.log(
          `Processing rejected order for order id: ${restaurantApprovalRequestAvroModel.getOrderId()}, with failures: ${restaurantApprovalRequestAvroModel.getFailureMessages().join(Order.FAILURE_MESSAGE_DELIMITER)}`,
        );
        await this.restaurantApprovalResponseMessageListener.orderRejected(
          this.orderMessagingDataMapper.approvalResponseAvroModelToRestaurantApprovalResponse(
            restaurantApprovalRequestAvroModel,
          ),
        );
      }
    });
  }
}
