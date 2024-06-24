import { OrderApprovalStatus } from '@app/common';

export class RestaurantApprovalResponse {
  private id: string;
  private sagaId: string;
  private orderId: string;
  private restaurantId: string;
  private createdAt: Date;
  private orderApprovalStatus: OrderApprovalStatus;
  private failureMessages: string[];
  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getSagaId(): string {
    return this.sagaId;
  }

  setSagaId(sagaId: string) {
    this.sagaId = sagaId;
  }

  getOrderId(): string {
    return this.orderId;
  }

  setOrderId(orderId: string) {
    this.orderId = orderId;
  }

  getRestaurantId(): string {
    return this.restaurantId;
  }

  setRestaurantId(restaurantId: string) {
    this.restaurantId = restaurantId;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  getOrderApprovalStatus(): OrderApprovalStatus {
    return this.orderApprovalStatus;
  }

  setOrderApprovalStatus(orderApprovalStatus: OrderApprovalStatus) {
    this.orderApprovalStatus = orderApprovalStatus;
  }

  getFailureMessages(): string[] {
    return this.failureMessages;
  }

  setFailureMessages(failureMessages: string[]) {
    this.failureMessages = failureMessages;
  }

  static builder() {
    return new Builder();
  }
}

export class Builder {
  private _id: string;
  private _sagaId: string;
  private _orderId: string;
  private _restaurantId: string;
  private _createdAt: Date;
  private _orderApprovalStatus: OrderApprovalStatus;
  private _failureMessages: string[];

  id(id: string) {
    this._id = id;
    return this;
  }

  sagaId(sagaId: string) {
    this._sagaId = sagaId;
    return this;
  }

  orderId(orderId: string) {
    this._orderId = orderId;
    return this;
  }

  restaurantId(restaurantId: string) {
    this._restaurantId = restaurantId;
    return this;
  }

  createdAt(createdAt: Date) {
    this._createdAt = createdAt;
    return this;
  }

  orderApprovalStatus(orderApprovalStatus: OrderApprovalStatus) {
    this._orderApprovalStatus = orderApprovalStatus;
    return this;
  }

  failureMessages(failureMessages: string[]) {
    this._failureMessages = failureMessages;
    return this;
  }

  build() {
    const restaurantApprovalResponse = new RestaurantApprovalResponse();
    restaurantApprovalResponse.setId(this._id);
    restaurantApprovalResponse.setSagaId(this._sagaId);
    restaurantApprovalResponse.setOrderId(this._orderId);
    restaurantApprovalResponse.setRestaurantId(this._restaurantId);
    restaurantApprovalResponse.setCreatedAt(this._createdAt);
    restaurantApprovalResponse.setOrderApprovalStatus(
      this._orderApprovalStatus,
    );
    restaurantApprovalResponse.setFailureMessages(this._failureMessages);
    return restaurantApprovalResponse;
  }
}
