import {
  OrderApprovalStatus,
  OrderCancelledEvent,
  OrderCreatedEvent,
  OrderPaidEvent,
  PaymentStatus,
  generateUUID,
} from '@app/common';
import { PaymentRequestAvroModel } from 'apps/infrastructure/kafka/kafka-model/types/PaymentRequest.avsc';
import { PaymentOrderStatusEnum } from 'apps/infrastructure/kafka/kafka-model/types';
import {
  Product,
  RestaurantApprovalRequestAvroModel,
  RestaurantOrderStatus,
  RestaurantOrderStatusEnum,
} from 'apps/infrastructure/kafka/kafka-model/types/RestaurantApprovalRequest.avsc';
import { PaymentResponseAvroModel } from 'apps/infrastructure/kafka/kafka-model/types/PaymentResponse.avsc';
import { PaymentResponse, RestaurantApprovalResponse } from '@app/order-domain';
import { RestaurantApprovalResponseAvroModel } from 'apps/infrastructure/kafka/kafka-model/types/RestaurantApprovalResponse.avsc';
export class OrderMessagingDataMapper {
  orderCreatedEventToPaymentRequestAvroModel(
    orderCreatedEvent: OrderCreatedEvent,
  ): PaymentRequestAvroModel {
    const order = orderCreatedEvent.getOrder();
    return PaymentRequestAvroModel.builder()
      .id(generateUUID())
      .sagaId('')
      .customerId(order.getCustomerId().getValue())
      .orderId(order.getId().getValue())
      .price(order.getPrice().getAmount())
      .createdAt(Number(orderCreatedEvent.getCreatedAt()))
      .paymentOrderStatus(PaymentOrderStatusEnum.PENDING)
      .build();
  }

  orderCancelledEventToPaymentRequestAvroModel(
    orderCancelledEvent: OrderCancelledEvent,
  ): PaymentRequestAvroModel {
    const order = orderCancelledEvent.getOrder();
    return PaymentRequestAvroModel.builder()
      .id(generateUUID())
      .sagaId('')
      .customerId(order.getCustomerId().getValue())
      .orderId(order.getId().getValue())
      .price(order.getPrice().getAmount())
      .createdAt(Number(orderCancelledEvent.getCreatedAt()))
      .paymentOrderStatus(PaymentOrderStatusEnum.CANCELLED)
      .build();
  }

  orderPaidEventToRestaurantRequestAvroModel(orderPaidEvent: OrderPaidEvent) {
    const order = orderPaidEvent.getOrder();
    return RestaurantApprovalRequestAvroModel.builder()
      .id(generateUUID())
      .sagaId('')
      .orderId(order.getId().getValue())
      .restaurantId(order.getRestaurantId().getValue())
      .orderId(order.getId().getValue())
      .restaurantOrderStatus(order.getOrderStatus() as RestaurantOrderStatus)
      .products(
        order
          .getItems()
          .map((orderItem) =>
            Product.builder()
              .id(orderItem.getProduct().getId().getValue())
              .quantity(orderItem.getQuantity())
              .build(),
          ),
      )
      .price(order.getPrice().getAmount())
      .createdAt(Number(orderPaidEvent.getCreatedAt()))
      .restaurantOrderStatus(RestaurantOrderStatusEnum.PAID)
      .build();
  }

  paymentResponseAvroModelToPaymentResponse(
    paymentResponseAvroModel: PaymentResponseAvroModel,
  ): PaymentResponse {
    return PaymentResponse.builder()
      .id(paymentResponseAvroModel.getId())
      .sagaId(paymentResponseAvroModel.getSagaId())
      .paymentId(paymentResponseAvroModel.getPaymentId())
      .customerId(paymentResponseAvroModel.getCustomerId())
      .orderId(paymentResponseAvroModel.getOrderId())
      .price(paymentResponseAvroModel.getPrice())
      .createdAt(new Date(paymentResponseAvroModel.getCreatedAt()))
      .paymentStatus(
        paymentResponseAvroModel.getPaymentStatus() as PaymentStatus,
      )
      .failureMessages(paymentResponseAvroModel.getFailureMessages())
      .build();
  }

  approvalResponseAvroModelToRestaurantApprovalResponse(
    restaurantApprovalResponseAvroModel: RestaurantApprovalResponseAvroModel,
  ) {
    return RestaurantApprovalResponse.builder()
      .id(restaurantApprovalResponseAvroModel.getId())
      .sagaId(restaurantApprovalResponseAvroModel.getSagaId())
      .restaurantId(restaurantApprovalResponseAvroModel.getRestaurantId())
      .orderId(restaurantApprovalResponseAvroModel.getOrderId())
      .createdAt(new Date(restaurantApprovalResponseAvroModel.getCreatedAt()))
      .orderApprovalStatus(
        restaurantApprovalResponseAvroModel.getOrderApprovalStatus() as OrderApprovalStatus,
      )
      .failureMessages(restaurantApprovalResponseAvroModel.getFailureMessages())
      .build();
  }
}
