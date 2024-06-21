import { AggregateRoot } from '@app/common';
import { CustomerId } from '@app/common';
import { Product } from './Product';

export class Customer extends AggregateRoot<CustomerId> {
}
