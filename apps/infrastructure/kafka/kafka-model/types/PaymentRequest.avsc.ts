/* eslint-disable @typescript-eslint/no-namespace */

export type PaymentRequestAvroModel =
  ComFoodOrderingSystemKafkaOrderAvroModel.PaymentRequestAvroModel;

export namespace ComFoodOrderingSystemKafkaOrderAvroModel {
  export const PaymentOrderStatusSchema =
    '{"type":"enum","name":"PaymentOrderStatus","symbols":["PENDING","CANCELLED"]}';
  export const PaymentOrderStatusName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentOrderStatus';
  export type PaymentOrderStatus = 'PENDING' | 'CANCELLED';
  export const PaymentRequestAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"PaymentRequestAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"customerId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}},{"name":"paymentOrderStatus","type":{"type":"enum","name":"PaymentOrderStatus","symbols":["PENDING","CANCELLED"]}}]}';
  export const PaymentRequestAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentRequestAvroModel';
  export interface PaymentRequestAvroModel {
    id: string;
    sagaId: string;
    customerId: string;
    orderId: string;
    price: number;
    createdAt: number;
    paymentOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.PaymentOrderStatus;
  }
}
