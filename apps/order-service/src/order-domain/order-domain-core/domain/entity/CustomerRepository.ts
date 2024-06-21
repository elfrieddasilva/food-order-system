import { UUID } from 'crypto';
import { Customer } from './Customer';

export interface CustomerRepository {
  findCustomer(customerId: UUID): Customer | void;
}
