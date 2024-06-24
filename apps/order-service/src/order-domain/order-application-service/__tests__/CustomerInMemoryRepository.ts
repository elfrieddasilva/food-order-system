import {
  Customer,
  CustomerRepository,
} from '@app/order-domain-core';
import { UUID } from '@app/common';

export class CustomerInMemoryRepository implements CustomerRepository {
  private customers: Customer[];
  async findCustomer(customerId: UUID) {
    return Promise.resolve(
      this.customers.find(
        (customer) => customer.getId().getValue() === customerId,
      )
    )
  }
}
