import { AggregateRoot } from '@app/common';
import { CustomerId } from '@app/common';

export class Customer extends AggregateRoot<CustomerId> {
  constructor(customerId?: CustomerId) {
    super();
    super.setId(customerId);
  }
}
