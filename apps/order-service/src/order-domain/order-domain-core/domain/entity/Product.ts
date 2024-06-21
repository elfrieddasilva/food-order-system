import { BaseEntity } from '@app/common';
import { Money, ProductId } from '@app/common';

export class Product extends BaseEntity<ProductId> {
  private name: string;
  private price: Money;

  constructor(productId: ProductId, name?: string, price?: Money) {
    super();
    super.setId(productId);
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  updateWithConfirmedNamePrice(name: string, price: Money) {
    this.name = name;
    this.price = price;
  }
}
