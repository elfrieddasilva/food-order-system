/* eslint-disable @typescript-eslint/no-namespace */

export type RestaurantApprovalResponseAvroModel =
  ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantApprovalResponseAvroModel;

export namespace ComFoodOrderingSystemKafkaOrderAvroModel {
  export const OrderApprovalStatusSchema =
    '{"type":"enum","name":"OrderApprovalStatus","symbols":["APPROVED","REJECTED"]}';
  export const OrderApprovalStatusName =
    'com.food.ordering.system.kafka.order.avro.model.OrderApprovalStatus';
  export type OrderApprovalStatus = 'APPROVED' | 'REJECTED';
  export const RestaurantApprovalResponseAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"RestaurantApprovalResponseAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}},{"name":"orderApprovalStatus","type":{"type":"enum","name":"OrderApprovalStatus","symbols":["APPROVED","REJECTED"]}},{"name":"failureMessages","type":{"type":"array","items":{"type":"string"}}}]}';
  export const RestaurantApprovalResponseAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantApprovalResponseAvroModel';
  export interface RestaurantApprovalResponseAvroModel {
    id: string;
    sagaId: string;
    restaurantId: string;
    orderId: string;
    createdAt: number;
    orderApprovalStatus: ComFoodOrderingSystemKafkaOrderAvroModel.OrderApprovalStatus;
    failureMessages: string[];
  }
}
