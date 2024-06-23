import { UUID } from '@app/common';
import { Customer } from './Customer';

export abstract class CustomerRepository {
  abstract findCustomer(customerId: UUID): Customer | void;
}
