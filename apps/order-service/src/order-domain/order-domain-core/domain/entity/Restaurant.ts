import { AggregateRoot } from '@app/common';
import { RestaurantId } from '@app/common';
import { Product } from './Product';

export class Restaurant extends AggregateRoot<RestaurantId> {
  private readonly products: Product[];
  private active: boolean;

  constructor(
    restaurantId: RestaurantId,
    products: Product[],
    active: boolean,
  ) {
    super();
    super.setId(restaurantId);
    this.products = products;
    this.active = active;
  }

  public static builder() {
    return new Builder();
  }

  getProducts() {
    return this.products;
  }

  isActive() {
    return this.active;
  }
}

class Builder {
  private _restaurantId: RestaurantId;
  private _products: Product[];
  private _active: boolean;

  restaurantId(val: RestaurantId) {
    this._restaurantId = val;
    return this;
  }

  products(val: Product[]) {
    this._products = val;
    return this;
  }

  active(val: boolean) {
    this._active = val;
    return this;
  }

  build() {
    return new Restaurant(this._restaurantId, this._products, this._active);
  }
}
