import { IsDefined } from 'class-validator';
import { UUID } from '@app/common';

export class OrderItemApp {
  @IsDefined()
  private readonly productId: UUID;
  public getProductId(): UUID {
    return this.productId;
  }
  @IsDefined()
  private readonly quantity: number;
  public getQuantity(): number {
    return this.quantity;
  }
  @IsDefined()
  private readonly price: number;
  public getPrice(): number {
    return this.price;
  }
  @IsDefined()
  private readonly subTotal: number;
  public getSubTotal(): number {
    return this.subTotal;
  }

  constructor(
    productId: UUID,
    quantity: number,
    price: number,
    subTotal: number,
  ) {
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
    this.subTotal = subTotal;
  }

  static builder() {
    return new OrderItemBuilder();
  }
}

class OrderItemBuilder {
  private _productId: UUID;
  private _quantity: number;
  private _price: number;
  private _subTotal: number;

  productId(val: UUID) {
    this._productId = val;
    return this;
  }

  quantity(val: number) {
    this._quantity = val;
    return this;
  }

  price(val: number) {
    this._price = val;
    return this;
  }

  subTotal(val: number) {
    this._subTotal = val;
    return this;
  }

  build() {
    return new OrderItemApp(
      this._productId,
      this._quantity,
      this._price,
      this._subTotal,
    );
  }
}
