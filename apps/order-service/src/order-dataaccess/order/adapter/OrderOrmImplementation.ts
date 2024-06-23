import { Order, TrackingId } from '@app/order-domain';
import { OrderDataAccessMapper } from '../mapper/OrderDataAccessMapper';
import { OrderOrmRepository } from '../repository/OrderOrmRepository';

export class OrderOrmImplementation {
  constructor(
    private readonly orderOrmRepository: OrderOrmRepository,
    private readonly orderDataAccessMapper: OrderDataAccessMapper,
  ) {}
  async save(order: Order) {
    return this.orderDataAccessMapper.orderEntityToOrder(
      await this.orderOrmRepository.save(
        this.orderDataAccessMapper.orderToOrderEntity(order),
      ),
    );
  }
  async findByTrackingId(trackingId: TrackingId) {
    return this.orderDataAccessMapper.orderEntityToOrder(
      await this.orderOrmRepository.findOneBy({
        trackingId: trackingId.getValue(),
      }),
    );
  }
}
