import { Order } from '@app/order-domain-core';
import { TrackingId } from '@app/order-domain-core';

export abstract class OrderRepository {
  abstract save(order: Order): Promise<Order>;
  abstract findByTrackingId(trackingId: TrackingId): Promise<Order>;
}
