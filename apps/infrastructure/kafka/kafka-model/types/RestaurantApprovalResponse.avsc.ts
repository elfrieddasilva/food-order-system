/* eslint-disable @typescript-eslint/no-namespace */



  export const OrderApprovalStatusSchema =
    '{"type":"enum","name":"OrderApprovalStatus","symbols":["APPROVED","REJECTED"]}';
  export const OrderApprovalStatusName =
    'com.food.ordering.system.kafka.order.avro.model.OrderApprovalStatus';
  export type OrderApprovalStatus = 'APPROVED' | 'REJECTED';
  export const RestaurantApprovalResponseAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"RestaurantApprovalResponseAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}},{"name":"orderApprovalStatus","type":{"type":"enum","name":"OrderApprovalStatus","symbols":["APPROVED","REJECTED"]}},{"name":"failureMessages","type":{"type":"array","items":{"type":"string"}}}]}';
  export const RestaurantApprovalResponseAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantApprovalResponseAvroModel';
  export interface RestaurantApprovalResponseModel {
    id: string;
    sagaId: string;
    restaurantId: string;
    orderId: string;
    createdAt: number;
    orderApprovalStatus: OrderApprovalStatus;
    failureMessages: string[];
  }


export class RestaurantApprovalResponseAvroModel {
  private id: string;
  private sagaId: string;
  private restaurantId: string;
  private orderId: string;
  private createdAt: number;
  private orderApprovalStatus: OrderApprovalStatus;
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

  getRestaurantId(): string {
    return this.restaurantId;
  }

  setRestaurantId(value: string): void {
    this.restaurantId = value;
  }

  getOrderId(): string {
    return this.orderId;
  }

  setOrderId(value: string): void {
    this.orderId = value;
  }

  getCreatedAt(): number {
    return this.createdAt;
  }

  setCreatedAt(value: number): void {
    this.createdAt = value;
  }

  getOrderApprovalStatus(): OrderApprovalStatus {
    return this.orderApprovalStatus;
  }

  setOrderApprovalStatus(
    value: OrderApprovalStatus,
  ): void {
    this.orderApprovalStatus = value;
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
  private _restaurantId: string;
  private _orderId: string;
  private _createdAt: number;
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

  restaurantId(
    restaurantId: string,
  ) {
    this._restaurantId = restaurantId;
    return this;
  }

  orderId(orderId: string) {
    this._orderId = orderId;
    return this;
  }

  createdAt(createdAt: number) {
    this._createdAt = createdAt;
    return this;
  }

  orderApprovalStatus(
    orderApprovalStatus: OrderApprovalStatus,
  ) {
    this._orderApprovalStatus = orderApprovalStatus;
    return this;
  }

  failureMessages(
    failureMessages: string[],
  ) {
    this._failureMessages = failureMessages;
    return this;
  }

  build() {
    const model = new RestaurantApprovalResponseAvroModel();
    model.setId(this._id);
    model.setSagaId(this._sagaId);
    model.setRestaurantId(this._restaurantId);
    model.setOrderId(this._orderId);
    model.setCreatedAt(this._createdAt);
    model.setOrderApprovalStatus(this._orderApprovalStatus);
    model.setFailureMessages(this._failureMessages);
    return model;
  }
}
