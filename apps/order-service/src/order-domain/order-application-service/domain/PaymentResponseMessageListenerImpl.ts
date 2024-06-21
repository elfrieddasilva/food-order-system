import { PaymentResponseMessageListener } from './ports/input';

export class PaymentResponseMessageListenerImpl
  implements PaymentResponseMessageListener
{
  paymentCompleted(paymentResponse: PaymentResponse): void {
    throw new Error('Method not implemented.');
  }
  paymentCancelled(paymentResponse: PaymentResponse): void {
    throw new Error('Method not implemented.');
  }
}
