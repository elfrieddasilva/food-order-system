import { TrackingId } from '../../';
import { TrackOrderQuery } from './dto/track/TrackOrderQuery';
import { TrackOrderResponse } from './dto/track/TrackOrderResponse';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderRepository } from './ports/output/repository/OrderRepository';
import { OrderNotFoundException } from '../../';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OrderTrackCommandHandler {
  private readonly orderDataMapper: OrderDataMapper;

  private readonly orderRepository: OrderRepository;
  private logger = new Logger(OrderTrackCommandHandler.name);

  constructor(
    orderDataMapper: OrderDataMapper,
    orderRepository: OrderRepository,
  ) {
    this.orderDataMapper = orderDataMapper;
    this.orderRepository = orderRepository;
  }

  async trackOrder(
    trackOrderQuery: TrackOrderQuery,
  ): Promise<TrackOrderResponse> {
    try {
      const orderResult = await this.orderRepository.findByTrackingId(
        new TrackingId(trackOrderQuery.getOrderTrackingId()),
      );
      if (!orderResult) {
        this.logger.warn(
          `Could not find order with id ${trackOrderQuery.getOrderTrackingId()}`,
        );
        throw new OrderNotFoundException(
          `Could not find order with tracking id: ${trackOrderQuery.getOrderTrackingId()}`,
        );
      }
      return this.orderDataMapper.orderToTrackOrderResponse(orderResult);
    } catch (error) {
      throw error;
    }
  }
}
