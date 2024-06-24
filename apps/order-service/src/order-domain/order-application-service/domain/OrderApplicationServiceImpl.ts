import { CreateOrderCommand } from '@app/order-domain';
import { CreateOrderResponse } from '@app/order-domain';
import { TrackOrderQuery } from '@app/order-domain';
import { TrackOrderResponse } from '@app/order-domain';
import { OrderApplicationService } from '@app/order-domain';
import { OrderCreateCommandHandler } from './OrderCreateCommandHandler';
import { OrderTrackCommandHandler } from './OrderTrackCommandHandler';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderApplicationServiceImpl implements OrderApplicationService {
  constructor(
    private readonly orderCreateCommandHandler: OrderCreateCommandHandler,
    private readonly orderTrackCommandHandler: OrderTrackCommandHandler,
  ) {}

  async createOrder(createOrderCommand: CreateOrderCommand) {
    return await this.orderCreateCommandHandler.createOrder(createOrderCommand);
  }

  async trackOrder(trackOrderQuery: TrackOrderQuery) {
    return await this.orderTrackCommandHandler.trackOrder(trackOrderQuery);
  }
}
