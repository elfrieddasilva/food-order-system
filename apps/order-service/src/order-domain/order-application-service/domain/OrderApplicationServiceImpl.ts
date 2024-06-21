import { CreateOrderCommand } from '@app/order-domain';
import { CreateOrderResponse } from '@app/order-domain';
import { TrackOrderQuery } from '@app/order-domain';
import { TrackOrderResponse } from '@app/order-domain';
import { OrderApplicationService } from '@app/order-domain';
import { OrderCreateCommandHandler } from './OrderCreateCommandHandler';
import { OrderTrackCommandHandler } from './OrderTrackCommandHandler';

export class OrderApplicationServiceImpl implements OrderApplicationService {
  private readonly orderCreateCommandHandler: OrderCreateCommandHandler;
  private readonly orderTrackCommandHandler: OrderTrackCommandHandler;

  constructor(
    orderCreateCommandHandler: OrderCreateCommandHandler,
    orderTrackCommandHandler: OrderTrackCommandHandler,
  ) {
    this.orderCreateCommandHandler = orderCreateCommandHandler;
    this.orderTrackCommandHandler = orderTrackCommandHandler;
  }

  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse {
    return this.orderCreateCommandHandler.createOrder(createOrderCommand);
  }
  
  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse {
    return this.orderTrackCommandHandler.trackOrder(trackOrderQuery);
  }
}
