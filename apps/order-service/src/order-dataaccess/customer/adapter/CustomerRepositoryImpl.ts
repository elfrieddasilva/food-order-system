import { Customer, CustomerRepository } from '@app/order-domain';
import { CustomerOrmImplementation } from './CustomerOrmImplementation';
import { UUID } from '@app/common';

export class CustomerRepositoryImpl extends CustomerRepository {
  constructor(
    private readonly customerOrmImplementation: CustomerOrmImplementation,
  ) {
    super();
  }
  async findCustomer(customerId: UUID) {
    try {
      const customer =
        await this.customerOrmImplementation.findCustomer(customerId);
      return customer;
    } catch (error) {
      throw error;
    }
  }
}
