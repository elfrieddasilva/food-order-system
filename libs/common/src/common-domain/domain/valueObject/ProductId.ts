import { UUID } from '@app/common';
import { BaseId } from './BaseId';

export class ProductId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
