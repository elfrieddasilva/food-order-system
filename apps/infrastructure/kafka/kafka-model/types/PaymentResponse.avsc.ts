/* eslint-disable @typescript-eslint/no-namespace */

  export const PaymentStatusSchema =
    '{"type":"enum","name":"PaymentStatus","symbols":["COMPLETED","CANCELLED","FAILED"]}';
  export const PaymentStatusName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentStatus';
  export type PaymentStatus = 'COMPLETED' | 'CANCELLED' | 'FAILED';
  export const PaymentResponseAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"PaymentResponseAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"paymentId","type":{"type":"string","logicalType":"uuid"}},{"name":"customerId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}},{"name":"paymentStatus","type":{"type":"enum","name":"PaymentStatus","symbols":["COMPLETED","CANCELLED","FAILED"]}},{"name":"failureMessages","type":{"type":"array","items":{"type":"string"}}}]}';
  export const PaymentResponseAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentResponseAvroModel';
  export interface PaymentResponseModel {
    id: string;
    sagaId: string;
    paymentId: string;
    customerId: string;
    orderId: string;
    price: number;
    createdAt: number;
    paymentStatus: PaymentStatus;
    failureMessages: string[];
  }

export class PaymentResponseAvroModel {
  private id: string;
  private sagaId: string;
  private paymentId: string;
  private customerId: string;
  private orderId: string;
  private price: number;
  private createdAt: number;
  private paymentStatus: PaymentStatus;
  private failureMessages: string[];


  getId(): string {
    return this.id;
  }

  setId(value: string): void {
    this.id = value;
  }

  getSagaId(): string {
    return this.sagaId;
  }

  setSagaId(value: string): void {
    this.sagaId = value;
  }

  getPaymentId(): string {
    return this.paymentId;
  }

  setPaymentId(value: string): void {
    this.paymentId = value;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  setCustomerId(value: string): void {
    this.customerId = value;
  }

  getOrderId(): string {
    return this.orderId;
  }

  setOrderId(value: string): void {
    this.orderId = value;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }

  getCreatedAt(): number {
    return this.createdAt;
  }

  setCreatedAt(value: number): void {
    this.createdAt = value;
  }

  getPaymentStatus(): PaymentStatus {
    return this.paymentStatus;
  }

  setPaymentStatus(value: PaymentStatus): void {
    this.paymentStatus = value;
  }

  getFailureMessages(): string[] {
    return this.failureMessages;
  }

  setFailureMessages(value: string[]): void {
    this.failureMessages = value;
  }

  static builder() {
    return new Builder();
  }
}

 class Builder {
  private _id: string;
  private _sagaId: string;
  private _paymentId: string;
  private _customerId: string;
  private _orderId: string;
  private _price: number;
  private _createdAt: number;
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

  paymentId(paymentId: string) {
    this._paymentId = paymentId;
    return this;
  }

  customerId(customerId: string) {
    this._customerId = customerId;
    return this;
  }

  orderId(orderId: string) {
    this._orderId = orderId;
    return this;
  }

  price(price: number) {
    this._price = price;
    return this;
  }

  createdAt(createdAt: number) {
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

  build(): PaymentResponseAvroModel {
    const model = new PaymentResponseAvroModel();
    model.setId(this._id);
    model.setSagaId(this._sagaId);
    model.setPaymentId(this._paymentId);
    model.setCustomerId(this._customerId);
    model.setOrderId(this._orderId);
    model.setPrice(this._price);
    model.setCreatedAt(this._createdAt);
    model.setPaymentStatus(this._paymentStatus);
    model.setFailureMessages(this._failureMessages);
    return model;
  }
}
