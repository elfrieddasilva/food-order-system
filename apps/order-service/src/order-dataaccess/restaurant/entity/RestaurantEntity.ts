import { UUID } from '@app/common';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'order_restaurant_m_view', schema: 'restaurant' })
export class RestaurantEntity {
  @PrimaryColumn()
  restaurantId: UUID;

  @PrimaryColumn()
  productId: UUID;

  @Column()
  restaurantName: string;

  @Column()
  restaurantActive: boolean;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  public getRestaurantId(): UUID {
    return this.restaurantId;
  }

  public getProductId(): UUID {
    return this.productId;
  }

  public getRestaurantName(): string {
    return this.restaurantName;
  }

  public getRestaurantActive(): boolean {
    return this.restaurantActive;
  }

  public getProductName(): string {
    return this.productName;
  }

  public getProductPrice(): number {
    return this.productPrice;
  }

  public setRestaurantId(value: UUID): void {
    this.restaurantId = value;
  }

  public setProductId(value: UUID): void {
    this.productId = value;
  }

  public setRestaurantName(value: string): void {
    this.restaurantName = value;
  }

  public setRestaurantActive(value: boolean): void {
    this.restaurantActive = value;
  }

  public setProductName(value: string): void {
    this.productName = value;
  }

  public setProductPrice(value: number): void {
    this.productPrice = value;
  }

  builder() {
    return new Builder();
  }
}

class Builder {
  private _restaurantId: UUID;
  private _productId: UUID;
  private _restaurantName: string;
  private _restaurantActive: boolean;
  private _productName: string;
  private _productPrice: number;

  public restaurantId(value: UUID): this {
    this._restaurantId = value;
    return this;
  }

  public productId(value: UUID): this {
    this._productId = value;
    return this;
  }

  public restaurantName(value: string): this {
    this._restaurantName = value;
    return this;
  }

  public restaurantActive(value: boolean): this {
    this._restaurantActive = value;
    return this;
  }

  public productName(value: string): this {
    this._productName = value;
    return this;
  }

  public productPrice(value: number): this {
    this._productPrice = value;
    return this;
  }

  public build(): RestaurantEntity {
    const restaurant = new RestaurantEntity();
    restaurant.setRestaurantId(this._restaurantId);
    restaurant.setProductId(this._productId);
    restaurant.setRestaurantName(this._restaurantName);
    restaurant.setRestaurantActive(this._restaurantActive);
    restaurant.setProductName(this._productName);
    restaurant.setProductPrice(this._productPrice);
    return restaurant;
  }
}
