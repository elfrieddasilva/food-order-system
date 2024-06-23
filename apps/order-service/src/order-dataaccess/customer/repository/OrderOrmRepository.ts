import { UUID } from '@app/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entity/OrderEntity';

export abstract class OrderOrmRepository extends Repository<OrderEntity> {
  abstract findByTrackingId(trackingId: UUID): OrderEntity | void;
}
