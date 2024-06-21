import { BaseId } from '@app/common';
import { UUID } from 'crypto';

export class TrackingId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
