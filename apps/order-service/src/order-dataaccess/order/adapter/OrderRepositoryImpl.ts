import { Order, OrderRepository, TrackingId } from '@app/order-domain';
import { OrderOrmImplementation } from './OrderOrmImplementation';
import { Injectable } from '@nestjs/common';


export class OrderRepositoryImpl extends OrderRepository {
  constructor(private readonly orderOrmImplementation: OrderOrmImplementation) {
    super();
  }
  async save(order: Order)  {
    try {
      return await this.orderOrmImplementation.save(order);
    } catch (error) {
      throw error;
    }

  }
  async findByTrackingId(trackingId: TrackingId) {
    try {
      return await this.orderOrmImplementation.findByTrackingId(trackingId);
    } catch (error) {
      throw error;
    }
  }
}
