import { Repository } from 'typeorm';
import { OrderEntity } from '../entity/OrderEntity';

export class OrderOrmRepository extends Repository<OrderEntity> {}