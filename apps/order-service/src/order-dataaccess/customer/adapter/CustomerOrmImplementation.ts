import { UUID } from '@app/common';
import { CustomerOrmRepository } from '../repository/CustomerOrmRepository';
import { CustomerDataAccessMapper } from '../mapper/CustomerDataAccessMapper';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../entity/CustomerEntity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CustomerOrmImplementation {
  constructor(
    @InjectRepository(CustomerEntity) private readonly customerOrmRepository: CustomerOrmRepository,
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
