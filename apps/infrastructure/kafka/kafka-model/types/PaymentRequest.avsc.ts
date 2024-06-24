/* eslint-disable @typescript-eslint/no-namespace */


  export const PaymentOrderStatusSchema =
    '{"type":"enum","name":"PaymentOrderStatus","symbols":["PENDING","CANCELLED"]}';
  export const PaymentOrderStatusName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentOrderStatus';
  export type PaymentOrderStatus = 'PENDING' | 'CANCELLED';
  export const PaymentRequestAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"PaymentRequestAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"customerId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"int","logicalType":"date"}},{"name":"paymentOrderStatus","type":{"type":"enum","name":"PaymentOrderStatus","symbols":["PENDING","CANCELLED"]}}]}';
  export const PaymentRequestAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentRequestAvroModel';
  export interface PaymentRequestModel {
    id: string;
    sagaId: string;
    customerId: string;
    orderId: string;
    price: number;
    createdAt: number;
    paymentOrderStatus: PaymentOrderStatus;
  }


  export enum PaymentOrderStatusEnum {
    PENDING= "PENDING",
    CANCELLED="CANCELLED"
  }


export class PaymentRequestAvroModel {
  private id: string;
  private sagaId: string;
  private customerId: string;
  private orderId: string;
  private price: number;
  private createdAt: number;
  private paymentOrderStatus: PaymentOrderStatus;

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

  getPaymentOrderStatus(): PaymentOrderStatus {
    return this.paymentOrderStatus;
  }

  setPaymentOrderStatus(
    value: PaymentOrderStatus,
  ): void {
    this.paymentOrderStatus = value;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _id: string;
  private _sagaId: string;
  private _customerId: string;
  private _orderId: string;
  private _price: number;
  private _createdAt: number;
  private _paymentOrderStatus: PaymentOrderStatus;

  id(id: string): Builder {
    this._id = id;
    return this;
  }

  sagaId(sagaId: string): Builder {
    this._sagaId = sagaId;
    return this;
  }

  customerId(customerId: string): Builder {
    this._customerId = customerId;
    return this;
  }

  orderId(orderId: string): Builder {
    this._orderId = orderId;
    return this;
  }

  price(price: number): Builder {
    this._price = price;
    return this;
  }

  createdAt(createdAt: number): Builder {
    this._createdAt = createdAt;
    return this;
  }

  paymentOrderStatus(
    paymentOrderStatus: PaymentOrderStatus,
  ): Builder {
    this._paymentOrderStatus = paymentOrderStatus;
    return this;
  }

  build(): PaymentRequestAvroModel {
    const model = new PaymentRequestAvroModel();
    model.setId(this._id);
    model.setSagaId(this._sagaId);
    model.setCustomerId(this._customerId);
    model.setOrderId(this._orderId);
    model.setPrice(this._price);
    model.setCreatedAt(this._createdAt);
    model.setPaymentOrderStatus(this._paymentOrderStatus);
    return model;
  }
}
