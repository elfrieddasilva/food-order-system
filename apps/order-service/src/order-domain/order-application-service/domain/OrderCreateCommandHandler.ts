import { OrderCreatedPaymentRequestMessagePublisher } from '@app/order-domain-core';
import { CreateOrderCommand } from './dto/create/CreateOrderCommand';
import { CreateOrderResponse } from './dto/create/CreateOrderResponse';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderCreateHelper } from './OrderCreateHelper';
import { Logger } from '@nestjs/common';

export class OrderCreateCommandHandler {
  private readonly orderCreateHelper: OrderCreateHelper;

  private readonly orderDataMapper: OrderDataMapper;

  private readonly orderCreatedPaymentRequestMessagePublisher: OrderCreatedPaymentRequestMessagePublisher;

  private logger = new Logger();

  constructor(
    orderCreateHelper: OrderCreateHelper,
    orderDataMapper: OrderDataMapper,
    orderCreatedPaymentRequestMessagePublisher: OrderCreatedPaymentRequestMessagePublisher,
  ) {
    this.orderCreateHelper = orderCreateHelper;
    this.orderDataMapper = orderDataMapper;
    this.orderCreatedPaymentRequestMessagePublisher =
      orderCreatedPaymentRequestMessagePublisher;
  }

  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse {
    const orderCreatedEvent =
      this.orderCreateHelper.persistOrder(createOrderCommand);
    console.info(
      `Order is created with id: ${orderCreatedEvent.getOrder().getId().getValue()}`,
    );
    this.orderCreatedPaymentRequestMessagePublisher.publish(orderCreatedEvent);
    return this.orderDataMapper.orderToCreateOrderResponse(
      orderCreatedEvent.getOrder(),
      "Order Created Successfully"
    );
  }
}
