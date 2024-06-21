import { CreateOrderCommand } from '@app/order-domain';
import { CreateOrderResponse } from '@app/order-domain';
import { TrackOrderQuery } from '@app/order-domain';
import { TrackOrderResponse } from '@app/order-domain';

export interface OrderApplicationService {
  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse;
  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse;
}
