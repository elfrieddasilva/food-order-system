import { UUID } from '@app/common';
import { IsDefined } from 'class-validator';
import { OrderItemApp as OrderItem } from './OrderItem';
import { OrderAddress } from './OrderAddress';

export class CreateOrderCommand {
  constructor(
    customerId: UUID,
    restaurantId: UUID,
    price: number,
    items: OrderItem[],
    address: OrderAddress,
  ) {
    this.customerId = customerId;
    this.restaurantId = restaurantId;
    this.price = price;
    this.items = items;
    this.address = address;
  }

  @IsDefined()
  private readonly customerId: UUID;
  public getCustomerId(): UUID {
    return this.customerId;
  }

  @IsDefined()
  private readonly restaurantId: UUID;
  public getRestaurantId(): UUID {
    return this.restaurantId;
  }

  @IsDefined()
  private readonly price: number;
  public getPrice(): number {
    return this.price;
  }

  @IsDefined()
  private readonly items: OrderItem[];
  public getItems(): OrderItem[] {
    return this.items;
  }

  @IsDefined()
  private readonly address: OrderAddress;
  public getAddress(): OrderAddress {
    return this.address;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _customerId: UUID;
  private _restaurantId: UUID;
  private _price: number;
  private _items: OrderItem[];
  private _address: OrderAddress;

  customerId(val: UUID) {
    this._customerId = val;
    return this;
  }

  restaurantId(val: UUID) {
    this._restaurantId = val;
    return this;
  }

  price(val: number) {
    this._price = val;
    return this;
  }

  items(val: OrderItem[]) {
    this._items = val;
    return this;
  }

  address(val: OrderAddress) {
    this._address = val;
    return this;
  }

  build() {
    return new CreateOrderCommand(
      this._customerId,
      this._restaurantId,
      this._price,
      this._items,
      this._address,
    );
  }
}
