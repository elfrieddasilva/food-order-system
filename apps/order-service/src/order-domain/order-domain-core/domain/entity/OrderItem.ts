import { BaseEntity } from '@app/common';
import { OrderItemId } from '../valueObject';
import { Money, OrderId } from '@app/common';
import { Product } from './Product';

export class OrderItem extends BaseEntity<OrderItemId> {
  private orderId: OrderId;
  private readonly product: Product;
  private readonly quantity: number;
  private readonly price: Money;
  private readonly subTotal: Money;

  constructor(
    orderItemId: OrderItemId,
    product: Product,
    quantity: number,
    price: Money,
    subTotal: Money,
  ) {
    super();
    super.setId(orderItemId);
    this.price = price;
    this.product = product;
    this.quantity = quantity;
    this.subTotal = subTotal;
  }

  public static builder(): Builder {
    return new Builder();
  }

  isPriceValid() {
    return (
      this.price.isGreaterThanZero() &&
      this.price.getAmount() === this.product.getPrice().getAmount() &&
      this.price.multiply(this.quantity).getAmount() ===
        this.subTotal.getAmount()
    );
  }

  initializeOrderItem(orderId: OrderId, orderItemId: OrderItemId) {
    this.orderId = orderId;
    super.setId(orderItemId);
  }

  public getOrderId(): OrderId {
    return this.orderId;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getPrice(): Money {
    return this.price;
  }

  public getSubTotal(): Money {
    return this.subTotal;
  }
}

class Builder {
  private _orderItemId: OrderItemId;
  private _product: Product;
  private _quantity: number;
  private _price: Money;
  private _subTotal: Money;

  orderItemId(val: OrderItemId) {
    this._orderItemId = val;
    return this;
  }

  product(product: Product) {
    this._product = product;
    return this;
  }

  price(price: Money) {
    this._price = price;
    return this;
  }

  quantity(quantity: number) {
    this._quantity = quantity;
    return this;
  }

  subTotal(subTotal: Money) {
    this._subTotal = subTotal;
    return this;
  }

  build(): OrderItem {
    return new OrderItem(
      this._orderItemId,
      this._product,
      this._quantity,
      this._price,
      this._subTotal,
    );
  }
}
