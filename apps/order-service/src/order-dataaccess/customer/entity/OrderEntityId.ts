import { OrderEntity } from './OrderEntity';

export class OrderEntityId {
  private id: number;
  private order: OrderEntity;



  constructor(
    id: number,
    order: OrderEntity
  ) {
    this.id = id;
    this.order = order;
  }

  getId(): number {
    return this.id;
  }

  getOrder(): OrderEntity {
    return this.order;
  }

  setId(id: number): void {
    this.id = id;
  }

  setOrder(order: OrderEntity): void {
    this.order = order;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _id: number;
  private _order: OrderEntity;

  id(val: number) {
    this._id = val;
    return this;
  }


  build() {
    return new OrderEntityId(
      this._id,
      this._order
    );
  }
}
