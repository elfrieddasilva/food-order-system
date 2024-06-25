import { OrderCreatedPaymentRequestMessagePublisher } from '@app/order-domain-core';
import { CreateOrderCommand } from './dto/create/CreateOrderCommand';
import { CreateOrderResponse } from './dto/create/CreateOrderResponse';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderCreateHelper } from './OrderCreateHelper';
import { Injectable, Logger } from '@nestjs/common';


export class OrderCreateCommandHandler {
  private readonly orderCreateHelper: OrderCreateHelper;

  private readonly orderDataMapper: OrderDataMapper;

  private readonly orderCreatedPaymentRequestMessagePublisher: OrderCreatedPaymentRequestMessagePublisher;

  private readonly logger = new Logger(OrderCreateCommandHandler.name);

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

  async createOrder(createOrderCommand: CreateOrderCommand) {
    try {
      const orderCreatedEvent = await this.orderCreateHelper.persistOrder(createOrderCommand);
    this.logger.log(
      `Order is created with id: ${orderCreatedEvent.getOrder().getId().getValue()}`,
    );
    this.orderCreatedPaymentRequestMessagePublisher.publish(orderCreatedEvent);
    return this.orderDataMapper.orderToCreateOrderResponse(
      orderCreatedEvent.getOrder(),
      "Order Created Successfully"
    );
    } catch (error) {
      throw error;
    }
    
  }
}
