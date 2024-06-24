/* eslint-disable @typescript-eslint/no-namespace */
  export const RestaurantOrderStatusSchema =
    '{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}';
  export const RestaurantOrderStatusName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantOrderStatus';
  export type RestaurantOrderStatus = 'PAID';
  export const ProductSchema =
    '{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}';
  export const ProductName =
    'com.food.ordering.system.kafka.order.avro.model.Product';
   export const RestaurantApprovalRequestAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"RestaurantApprovalRequestAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantOrderStatus","type":{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}},{"name":"products","type":{"type":"array","items":{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}}]}';
  export const RestaurantApprovalRequestAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantApprovalRequestAvroModel';
  export interface RestaurantApprovalRequestModel {
    id: string;
    sagaId: string;
    restaurantId: string;
    orderId: string;
    restaurantOrderStatus: RestaurantOrderStatus;
    products: Product[];
    price: number;
    createdAt: number;
  }

  export enum RestaurantOrderStatusEnum {
    PAID="PAID"
  }

  export class Product {
    private id: string;
    private quantity: number;
  
    getId(): string {
      return this.id;
    }
  
    setId(id: string): void {
      this.id = id;
    }
  
    getQuantity(): number {
      return this.quantity;
    }
  
    setQuantity(quantity: number): void {
      this.quantity = quantity;
    }

    static builder() {
      return new ProductBuilder();
    }

  }
  
  class ProductBuilder {
    private _id: string;
    private _quantity: number;
  
    id(id: string): ProductBuilder {
      this._id = id;
      return this;
    }
  
    quantity(quantity: number): ProductBuilder {
      this._quantity = quantity;
      return this;
    }
  
    build(): Product {
      const product = new Product();
      product.setId(this._id);
      product.setQuantity(this._quantity);
      return product;
    }
  }
  


export class RestaurantApprovalRequestAvroModel {
  private id: string;
  private sagaId: string;
  private restaurantId: string;
  private orderId: string;
  private restaurantOrderStatus: RestaurantOrderStatus;
  private products: Product[];
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

  getRestaurantOrderStatus(): RestaurantOrderStatus {
    return this.restaurantOrderStatus;
  }

  setRestaurantOrderStatus(value: RestaurantOrderStatus): void {
    this.restaurantOrderStatus = value;
  }

  getProducts(): Product[] {
    return this.products;
  }

  setProducts(value: Product[]): void {
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
  private _restaurantOrderStatus: RestaurantOrderStatus;
  private _products: Product[];
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

  restaurantOrderStatus(restaurantOrderStatus: RestaurantOrderStatus): Builder {
    this._restaurantOrderStatus = restaurantOrderStatus;
    return this;
  }

  products(products: Product[]): Builder {
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

  build(): RestaurantApprovalRequestAvroModel {
    const model = new RestaurantApprovalRequestAvroModel();
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
