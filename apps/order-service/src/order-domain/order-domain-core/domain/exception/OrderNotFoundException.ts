import { DomainException } from '@app/common';

export class OrderNotFoundException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}
