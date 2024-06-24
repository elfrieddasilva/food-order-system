import { PaymentStatus } from '@app/common';

export class PaymentResponse {
  private id: string;
  private sagaId: string;
  private orderId: string;
  private paymentId: string;
  private customerId: string;
  private price: number;
  private createdAt: Date;
  private paymentStatus: PaymentStatus;
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

  getPaymentId(): string {
    return this.paymentId;
  }

  setPaymentId(paymentId: string) {
    this.paymentId = paymentId;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  setCustomerId(customerId: string) {
    this.customerId = customerId;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  getPaymentStatus(): PaymentStatus {
    return this.paymentStatus;
  }

  setPaymentStatus(paymentStatus: PaymentStatus) {
    this.paymentStatus = paymentStatus;
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
  private _paymentId: string;
  private _customerId: string;
  private _price: number;
  private _createdAt: Date;
  private _paymentStatus: PaymentStatus;
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

  paymentId(paymentId: string) {
    this._paymentId = paymentId;
    return this;
  }

  customerId(customerId: string) {
    this._customerId = customerId;
    return this;
  }

  price(price: number) {
    this._price = price;
    return this;
  }

  createdAt(createdAt: Date) {
    this._createdAt = createdAt;
    return this;
  }

  paymentStatus(paymentStatus: PaymentStatus) {
    this._paymentStatus = paymentStatus;
    return this;
  }

  failureMessages(failureMessages: string[]) {
    this._failureMessages = failureMessages;
    return this;
  }
  
  build() {
    const paymentResponse = new PaymentResponse();
    paymentResponse.setId(this._id);
    paymentResponse.setSagaId(this._sagaId);
    paymentResponse.setOrderId(this._orderId);
    paymentResponse.setPaymentId(this._paymentId);
    paymentResponse.setCustomerId(this._customerId);
    paymentResponse.setPrice(this._price);
    paymentResponse.setCreatedAt(this._createdAt);
    paymentResponse.setPaymentStatus(this._paymentStatus);
    paymentResponse.setFailureMessages(this._failureMessages);
    return paymentResponse;
  }


}