import { IsDefined } from 'class-validator';
import { UUID } from '@app/common';

export class TrackOrderQuery {
  constructor(orderTrackingId: UUID) {
    this.orderTrackingId = orderTrackingId;
  }
  @IsDefined()
  private readonly orderTrackingId: UUID;
  getOrderTrackingId(): UUID {
    return this.orderTrackingId;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _orderTrackingId: UUID;
  orderTrackingId(orderTrackingId: UUID) {
    this._orderTrackingId = orderTrackingId;
    return this;
  }
  build() {
    return new TrackOrderQuery(this._orderTrackingId);
  }
}
