import { UUID } from '@app/common';
import { Customer } from './Customer';

export interface CustomerRepository {
  findCustomer(customerId: UUID): Customer | void;
}
