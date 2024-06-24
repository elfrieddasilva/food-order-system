import { PaymentResponse } from './dto';
import { PaymentResponseMessageListener } from './ports/input';

export class PaymentResponseMessageListenerImpl
  implements PaymentResponseMessageListener
{
  async paymentCompleted(paymentResponse: PaymentResponse) {
    throw new Error('Method not implemented.');
  }
  async paymentCancelled(paymentResponse: PaymentResponse) {
    throw new Error('Method not implemented.');
  }
}
