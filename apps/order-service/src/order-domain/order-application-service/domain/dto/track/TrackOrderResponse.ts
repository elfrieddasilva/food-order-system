import { IsDefined } from 'class-validator';
import { OrderStatus } from '@app/common';
import { UUID } from '@app/common';

export class TrackOrderResponse {
  @IsDefined()
  private readonly orderTrackingId: UUID;
  @IsDefined()
  private readonly orderStatus: OrderStatus;
  private readonly failureMessages: string[];

  constructor(
    orderTrackingId: UUID,
    orderStatus: OrderStatus,
    failureMessages: string[],
  ) {
    this.orderTrackingId = orderTrackingId;
    this.orderStatus = orderStatus;
    this.failureMessages = failureMessages;
  }
    static builder() {
    return new Builder();
  }

  getOrderTrackingId() {
    return this.orderTrackingId;
  }

  getOrderStatus() {
    return this.orderStatus;
  }

  getFailureMessages() {
    return this.failureMessages;
  }

}

class Builder {
  private _orderTrackingId: UUID;
  private _orderStatus: OrderStatus;
  private _failureMessages: string[];

  orderTrackingId(val: UUID) {
    this._orderTrackingId = val;
    return this;
  }

  orderStatus(val: OrderStatus) {
    this._orderStatus = val;
    return this;
  }

  failureMessages(val: string[]) {
    this._failureMessages = val;
    return this;
  }

  build() {
    return new TrackOrderResponse(
      this._orderTrackingId,
      this._orderStatus,
      this._failureMessages,
    );
  }
}
