/* eslint-disable @typescript-eslint/no-namespace */

export type RestaurantApprovalRequestAvroModel =
  ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantApprovalRequestAvroModel;

export namespace ComFoodOrderingSystemKafkaOrderAvroModel {
  export const RestaurantOrderStatusSchema =
    '{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}';
  export const RestaurantOrderStatusName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantOrderStatus';
  export type RestaurantOrderStatus = 'PAID';
  export const ProductSchema =
    '{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}';
  export const ProductName =
    'com.food.ordering.system.kafka.order.avro.model.Product';
  export interface Product {
    id: string;
    quantity: number;
  }
  export const RestaurantApprovalRequestAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"RestaurantApprovalRequestAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantOrderStatus","type":{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}},{"name":"products","type":{"type":"array","items":{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}}]}';
  export const RestaurantApprovalRequestAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantApprovalRequestAvroModel';
  export interface RestaurantApprovalRequestAvroModel {
    id: string;
    sagaId: string;
    restaurantId: string;
    orderId: string;
    restaurantOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus;
    products: ComFoodOrderingSystemKafkaOrderAvroModel.Product[];
    price: number;
    createdAt: number;
  }
}

export class RestaurantApprovalRequestModel {
  private id: string;
  private sagaId: string;
  private restaurantId: string;
  private orderId: string;
  private restaurantOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus;
  private products: ComFoodOrderingSystemKafkaOrderAvroModel.Product[];
  private price: number;
  private createdAt: number;

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

  getRestaurantOrderStatus(): ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus {
    return this.restaurantOrderStatus;
  }

  setRestaurantOrderStatus(value: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus): void {
    this.restaurantOrderStatus = value;
  }

  getProducts(): ComFoodOrderingSystemKafkaOrderAvroModel.Product[] {
    return this.products;
  }

  setProducts(value: ComFoodOrderingSystemKafkaOrderAvroModel.Product[]): void {
    this.products = value;
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
  static builder() {
    return new Builder();
  }
}

class Builder {
  private _id: string;
  private _sagaId: string;
  private _restaurantId: string;
  private _orderId: string;
  private _restaurantOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus;
  private _products: ComFoodOrderingSystemKafkaOrderAvroModel.Product[];
  private _price: number;
  private _createdAt: number;

  id(id: string): Builder {
    this._id = id;
    return this;
  }

  sagaId(sagaId: string): Builder {
    this._sagaId = sagaId;
    return this;
  }

  restaurantId(restaurantId: string): Builder {
    this._restaurantId = restaurantId;
    return this;
  }

  orderId(orderId: string): Builder {
    this._orderId = orderId;
    return this;
  }

  restaurantOrderStatus(restaurantOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus): Builder {
    this._restaurantOrderStatus = restaurantOrderStatus;
    return this;
  }

  products(products: ComFoodOrderingSystemKafkaOrderAvroModel.Product[]): Builder {
    this._products = products;
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

  build(): RestaurantApprovalRequestModel {
    const model = new RestaurantApprovalRequestModel();
    model.setId(this._id);
    model.setSagaId(this._sagaId);
    model.setRestaurantId(this._restaurantId);
    model.setOrderId(this._orderId);
    model.setRestaurantOrderStatus(this._restaurantOrderStatus);
    model.setProducts(this._products);
    model.setPrice(this._price);
    model.setCreatedAt(this._createdAt);
    return model;
  }
}
