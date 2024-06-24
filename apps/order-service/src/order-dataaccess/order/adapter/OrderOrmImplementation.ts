import { Order, TrackingId } from '@app/order-domain';
import { OrderDataAccessMapper } from '../mapper/OrderDataAccessMapper';
import { OrderOrmRepository } from '../repository/OrderOrmRepository';
import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import { OrderEntity } from '../entity/OrderEntity';

@Injectable()
export class OrderOrmImplementation {
  constructor(
    @InjectRepository(OrderEntity) private readonly orderOrmRepository: OrderOrmRepository,
    private readonly orderDataAccessMapper: OrderDataAccessMapper,
  ) {}
  async save(order: Order) {
    try {
      return this.orderDataAccessMapper.orderEntityToOrder(
        await this.orderOrmRepository.save(
          this.orderDataAccessMapper.orderToOrderEntity(order),
        ),
      );
    } catch (error) {
      throw error;
    }

  }
  async findByTrackingId(trackingId: TrackingId) {
    try {
      return this.orderDataAccessMapper.orderEntityToOrder(
        await this.orderOrmRepository.findOneBy({
          trackingId: trackingId.getValue(),
        }),
      );
    } catch (error) {
      throw error;
    }

  }
}
