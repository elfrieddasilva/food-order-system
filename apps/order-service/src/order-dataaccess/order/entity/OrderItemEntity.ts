import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OrderEntity } from './OrderEntity';
import { UUID } from '@app/common';

@Entity({ name: 'order_items' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('uuid')
  orderId: UUID;

  @ManyToOne(() => OrderEntity, (order) => order.items)
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @Column('uuid')
  productId: UUID;

  @Column('float')
  price: number;

  @Column('int')
  quantity: number;

  @Column('float')
  subTotal: number;

  public getId(): UUID {
    return this.id;
  }

  public getOrderId(): UUID {
    return this.orderId;
  }

  public getOrder(): OrderEntity {
    return this.order;
  }

  public setId(id: UUID): void {
    this.id = id;
  }

  public setOrderId(orderId: UUID): void {
    this.orderId = orderId;
  }

  public setOrder(order: OrderEntity): void {
    this.order = order;
  }

  public getProductId(): UUID {
    return this.productId;
  }

  public setProductId(productId: UUID): void {
    this.productId = productId;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getSubTotal(): number {
    return this.subTotal;
  }

  public setSubTotal(subTotal: number): void {
    this.subTotal = subTotal;
  }

  public static builder(): OrderItemEntityBuilder {
    return new OrderItemEntityBuilder();
  }
}
class OrderItemEntityBuilder {
  private _id: UUID;
  private _orderId: UUID;
  private _order: OrderEntity;
  private _productId: UUID;
  private _price: number;
  private _quantity: number;
  private _subTotal: number;

  public id(id: UUID): OrderItemEntityBuilder {
    this._id = id;
    return this;
  }

  public orderId(orderId: UUID): OrderItemEntityBuilder {
    this._orderId = orderId;
    return this;
  }

  public order(order: OrderEntity): OrderItemEntityBuilder {
    this._order = order;
    return this;
  }

  public productId(val: UUID): OrderItemEntityBuilder {
    this._productId = val;
    return this;
  }

  public price(val: number): OrderItemEntityBuilder {
    this._price = val;
    return this;
  }

  public quantity(val: number): OrderItemEntityBuilder {
    this._quantity = val;
    return this;
  }

  public subTotal(val: number): OrderItemEntityBuilder {
    this._subTotal = val;
    return this;
  }

  public build(): OrderItemEntity {
    const orderItem = new OrderItemEntity();
    orderItem.setId(this._id);
    orderItem.setOrderId(this._orderId);
    orderItem.setOrder(this._order);
    orderItem.setProductId(this._productId);
    orderItem.setPrice(this._price);
    orderItem.setQuantity(this._quantity);
    orderItem.setSubTotal(this._subTotal);
    return orderItem;
  }
}
