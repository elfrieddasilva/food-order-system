import { Order, TrackingId } from '@app/order-domain-core';
import { OrderRepository } from '../domain';

export class OrderInMemoryRepository implements OrderRepository {
  private orders: Order[] = [];
  async save(order: Order) {
    this.orders.push(order);
    return Promise.resolve(order);
  }
  async findByTrackingId(trackingId: TrackingId) {
    const order = this.orders.find(
      (order) => order.getTrackingId() === trackingId,
    );
    return Promise.resolve(order);
  }
}
