import { Customer } from '@app/order-domain';
import { CustomerEntity } from '../entity/CustomerEntity';
import { CustomerId } from '@app/common';

export class CustomerDataAccessMapper {
  customerEntityToCustomer(customerEntity: CustomerEntity): Customer {
    return new Customer(new CustomerId(customerEntity.getId()));
  }
}
