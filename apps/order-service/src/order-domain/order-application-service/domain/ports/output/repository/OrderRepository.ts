import { Order } from '@app/order-domain-core';
import { TrackingId } from '@app/order-domain-core';

export abstract class OrderRepository {
  abstract save(order: Order): Order;
  abstract findByTrackingId(trackingId: TrackingId): Order | void;
}
