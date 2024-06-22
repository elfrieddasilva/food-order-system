/* eslint-disable @typescript-eslint/no-namespace */

export type PaymentResponseAvroModel =
  ComFoodOrderingSystemKafkaOrderAvroModel.PaymentResponseAvroModel;

export namespace ComFoodOrderingSystemKafkaOrderAvroModel {
  export const PaymentStatusSchema =
    '{"type":"enum","name":"PaymentStatus","symbols":["COMPLETED","CANCELLED","FAILED"]}';
  export const PaymentStatusName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentStatus';
  export type PaymentStatus = 'COMPLETED' | 'CANCELLED' | 'FAILED';
  export const PaymentResponseAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"PaymentResponseAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"paymentId","type":{"type":"string","logicalType":"uuid"}},{"name":"customerId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}},{"name":"paymentStatus","type":{"type":"enum","name":"PaymentStatus","symbols":["COMPLETED","CANCELLED","FAILED"]}},{"name":"failureMessages","type":{"type":"array","items":{"type":"string"}}}]}';
  export const PaymentResponseAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.PaymentResponseAvroModel';
  export interface PaymentResponseAvroModel {
    id: string;
    sagaId: string;
    paymentId: string;
    customerId: string;
    orderId: string;
    price: number;
    createdAt: number;
    paymentStatus: ComFoodOrderingSystemKafkaOrderAvroModel.PaymentStatus;
    failureMessages: string[];
  }
}
