import { Repository } from 'typeorm';
import { CustomerEntity } from '../entity/CustomerEntity';

export class CustomerOrmRepository extends Repository<CustomerEntity> {}
