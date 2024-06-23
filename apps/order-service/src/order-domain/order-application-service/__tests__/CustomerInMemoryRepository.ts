import {
  Customer,
  CustomerRepository,
} from '@app/order-domain-core';
import { UUID } from '@app/common';

export class CustomerInMemoryRepository implements CustomerRepository {
  private customers: Customer[];
  findCustomer(customerId: UUID): void | Customer {
    return this.customers.find(
      (customer) => customer.getId().getValue() === customerId,
    );
  }
}
