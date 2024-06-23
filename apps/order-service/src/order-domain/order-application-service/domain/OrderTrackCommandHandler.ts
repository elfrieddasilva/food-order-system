import { TrackingId } from '../../';
import { TrackOrderQuery } from './dto/track/TrackOrderQuery';
import { TrackOrderResponse } from './dto/track/TrackOrderResponse';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderRepository } from './ports/output/repository/OrderRepository';
import { Order } from '@app/order-domain-core';
import { OrderNotFoundException } from '../../';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderTrackCommandHandler {
  private readonly orderDataMapper: OrderDataMapper;

  private readonly orderRepository: OrderRepository;

  constructor(
    orderDataMapper: OrderDataMapper,
    orderRepository: OrderRepository,
  ) {
    this.orderDataMapper = orderDataMapper;
    this.orderRepository = orderRepository;
  }

  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse {
    const orderResult = this.orderRepository.findByTrackingId(
      new TrackingId(trackOrderQuery.getOrderTrackingId()),
    );
    if (!orderResult) {
      console.warn(
        `Could not find order with id ${trackOrderQuery.getOrderTrackingId()}`,
      );
      throw new OrderNotFoundException(
        `Could not find order with tracking id: ${trackOrderQuery.getOrderTrackingId()}`,
      );
    }
    return this.orderDataMapper.orderToTrackOrderResponse(orderResult);
  }
}
