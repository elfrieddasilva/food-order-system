import { BaseId, UUID } from '@app/common';

export class TrackingId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
