import { Entity, JoinColumn, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { OrderEntity } from './OrderEntity';
import { UUID } from '@app/common';

@Entity({ name: 'order_items' })
export class OrderItemEntity {
  @PrimaryColumn()
  id: string;

  @PrimaryColumn()
  @ManyToOne(() => OrderEntity, (order) => order.items, { cascade: true })
  @JoinColumn({ name: 'ORDER_ID' })
  order: OrderEntity;
  @Column()
  productId: UUID;
  @Column()
  price: number;
  @Column()
  quantity: number;
  @Column()
  subTotal: number;

  public getId(): string {
    return this.id;
  }

  public getOrder(): OrderEntity {
    return this.order;
  }
  public setId(id: string): void {
    this.id = id;
  }

  public setOrder(order: OrderEntity): void {
    this.order = order;
  }


  getProductId() {
    return this.productId;
  }

  setProductId(productId: UUID) {
    this.productId = productId;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  getSubTotal() {
    return this.subTotal;
  }

  setSubTotal(subTotal: number) {
    this.subTotal = subTotal;
  }

  public static builder() {
    return new OrderItemEntityBuilder();
  }
}

class OrderItemEntityBuilder {
  private _id: string;
  private _order: OrderEntity;
  private _productId: UUID;
  private _price: number;
  private _quantity: number;
  private _subTotal: number;

  public id(id: string): OrderItemEntityBuilder {
    this._id = id;
    return this;
  }

  public order(order: OrderEntity): OrderItemEntityBuilder {
    this._order = order;
    return this;
  }
  productId(val: UUID) {
    this._productId = val;
    return this;
  }

  price(val: number) {
    this._price = val;
    return this;
  }

  quantity(val: number) {
    this._quantity = val;
    return this;
  }

  subTotal(val: number) {
    this._subTotal = val;
    return this;
  }


  public build(): OrderItemEntity {
    const orderItem = new OrderItemEntity();
    orderItem.setId(this._id);
    orderItem.setOrder(this._order);
    orderItem.setProductId(this._productId);
    orderItem.setPrice(this._price);
    orderItem.setQuantity(this._quantity);
    orderItem.setSubTotal(this._subTotal)
    return orderItem;
  }
}
