import { DomainException } from '@app/common';

export class OrderDomainException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}
