import { Customer, CustomerRepository } from '@app/order-domain';
import { CustomerOrmImplementation } from './CustomerOrmImplementation';
import { UUID } from '@app/common';

export class CustomerRepositoryImpl extends CustomerRepository {
  constructor(
    private readonly customerOrmImplementation: CustomerOrmImplementation,
  ) {
    super();
  }
  findCustomer(customerId: UUID): void | Customer {
    let result: Customer;
    this.customerOrmImplementation
      .findCustomer(customerId)
      .then((foundCustomer) => (result = foundCustomer));
    return result!;
  }
}
