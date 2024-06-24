import { PaymentResponse } from "@app/order-domain/order-application-service/domain/dto";
export abstract class PaymentResponseMessageListener {
  abstract paymentCompleted(paymentResponse: PaymentResponse): Promise<void>;
  abstract paymentCancelled(paymentResponse: PaymentResponse): Promise<void>;
}
