import { BaseId } from '@app/common';

export class OrderItemId extends BaseId<string> {
  constructor(value: string) {
    super(value);
  }
}
