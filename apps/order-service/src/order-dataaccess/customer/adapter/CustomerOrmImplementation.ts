import { UUID } from '@app/common';
import { CustomerOrmRepository } from '../repository/CustomerOrmRepository';
import { CustomerDataAccessMapper } from '../mapper/CustomerDataAccessMapper';

export class CustomerOrmImplementation {
  constructor(
    private readonly customerOrmRepository: CustomerOrmRepository,
    private readonly customerDataAccessMapper: CustomerDataAccessMapper,
  ) {}

  async findCustomer(customerId: UUID) {
    return this.customerDataAccessMapper.customerEntityToCustomer(
      await this.customerOrmRepository.findOneBy({
        id: customerId,
      }),
    );
  }
}
