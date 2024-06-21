import { OrderStatus } from '@app/common';
import { UUID } from 'crypto';
import { IsDefined } from 'class-validator';

export class CreateOrderResponse {
  @IsDefined()
  private readonly orderTrackingId: UUID;
  public getOrderTrackingId(): UUID {
    return this.orderTrackingId;
  }
  @IsDefined()
  private readonly orderStatus: OrderStatus;
  public getOrderStatus(): OrderStatus {
    return this.orderStatus;
  }
  @IsDefined()
  private readonly message: string;
  public getMessage(): string {
    return this.message;
  }

  constructor(
    orderTrackingId: UUID,
    orderStatus: OrderStatus,
    message: string,
  ) {
    this.orderTrackingId = orderTrackingId;
    this.orderStatus = orderStatus;
    this.message = message;
  }
  static builder() {
    return new Builder();
  }
}

class Builder {
  private _orderTrackingId: UUID;
  private _orderStatus: OrderStatus;
  private _message: string;

  orderTrackingId(val: UUID) {
    this._orderTrackingId = val;
    return this;
  }

  orderStatus(val: OrderStatus) {
    this._orderStatus = val;
    return this;
  }

  message(val: string) {
    this._message = val;
    return this;
  }
  build() {
    return new CreateOrderResponse(
      this._orderTrackingId,
      this._orderStatus,
      this._message,
    );
  }
}
