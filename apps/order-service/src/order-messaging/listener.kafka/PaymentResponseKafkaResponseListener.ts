import { PaymentResponseMessageListener } from '@app/order-domain';
import { Injectable, Logger } from '@nestjs/common';
import { KafkaConsumer } from 'apps/infrastructure/kafka/kafka-consumer/KafkaConsumer';
import { PaymentResponseAvroModel } from 'apps/infrastructure/kafka/kafka-model/types/PaymentResponse.avsc';
import { OrderMessagingDataMapper } from '../mapper/OrderMessagingDataMapper';
import { PaymentStatus } from '@app/common';


export class PaymentResponseKafkaResponseListener
  implements KafkaConsumer<PaymentResponseAvroModel>
{
  private readonly logger = new Logger(
    PaymentResponseKafkaResponseListener.name,
  );
  constructor(
    private readonly paymentResponseMessageListener: PaymentResponseMessageListener,
    private readonly orderMessagingDataMapper: OrderMessagingDataMapper,
  ) {}

  async receive(
    messages: PaymentResponseAvroModel[],
    keys: string[],
    partitions: number[],
    offsets: number[],
  ) {
    this.logger.log(
      `${messages.length} number of payment responses received with keys:${keys.toString()}, partitions:${partitions.toString()} and offsets:${offsets.toString()}`,
    );

    messages.forEach(async (paymentResponseAvroModel) => {
      if (
        PaymentStatus.COMPLETED === paymentResponseAvroModel.getPaymentStatus()
      ) {
        this.logger.log(
          `Processing successful payment for order id: ${paymentResponseAvroModel.getOrderId()}`,
        );
        await this.paymentResponseMessageListener.paymentCompleted(
          this.orderMessagingDataMapper.paymentResponseAvroModelToPaymentResponse(
            paymentResponseAvroModel,
          ),
        );
      } else if (
        PaymentStatus.CANCELLED ===
          paymentResponseAvroModel.getPaymentStatus() ||
        PaymentStatus.FAILED === paymentResponseAvroModel.getPaymentStatus()
      ) {
        this.logger.log(
          `Processing unsuccesful payment for order id: ${paymentResponseAvroModel.getOrderId()}`,
        );
        await this.paymentResponseMessageListener.paymentCancelled(
          this.orderMessagingDataMapper.paymentResponseAvroModelToPaymentResponse(
            paymentResponseAvroModel,
          ),
        );
      }
    });
  }
}
