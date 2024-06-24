import { CreateOrderCommand } from '@app/order-domain';
import { CreateOrderResponse } from '@app/order-domain';
import { TrackOrderQuery } from '@app/order-domain';
import { TrackOrderResponse } from '@app/order-domain';

export abstract class OrderApplicationService {
  abstract createOrder(
    createOrderCommand: CreateOrderCommand,
  ): Promise<CreateOrderResponse>;
  abstract trackOrder(
    trackOrderQuery: TrackOrderQuery,
  ): Promise<TrackOrderResponse>;
}
