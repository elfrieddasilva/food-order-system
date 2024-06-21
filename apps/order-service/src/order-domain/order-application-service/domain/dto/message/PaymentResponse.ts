import { PaymentStatus } from '@app/common';

export class PaymentResponse {
  private id: string;
  private sagaId: string;
  private orderId: string;
  private paymentId: string;
  private customerId: string;
  private price: number;
  private createdAt: Date;
  private paymentStatus: PaymentStatus;
  private failureMessages: string[];
}
