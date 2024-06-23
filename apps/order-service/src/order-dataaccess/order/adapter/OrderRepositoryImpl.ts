import { Order, OrderRepository, TrackingId } from '@app/order-domain';
import { OrderOrmImplementation } from './OrderOrmImplementation';

export class OrderRepositoryImpl extends OrderRepository {
  constructor(private readonly orderOrmImplementation: OrderOrmImplementation) {
    super();
  }
  save(order: Order): Order {
    let result: Order;
    this.orderOrmImplementation
      .save(order)
      .then((savedOrder) => (result = savedOrder));
    return result!;
  }
  findByTrackingId(trackingId: TrackingId): void | Order {
    let result: Order;
    this.orderOrmImplementation
      .findByTrackingId(trackingId)
      .then((foundOrder) => (result = foundOrder));
    return result!;
  }
}
