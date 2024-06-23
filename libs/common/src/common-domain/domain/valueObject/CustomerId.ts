import { UUID } from '@app/common';
import { BaseId } from './BaseId';

export class CustomerId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
