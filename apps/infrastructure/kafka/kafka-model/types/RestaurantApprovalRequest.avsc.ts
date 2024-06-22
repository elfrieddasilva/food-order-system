/* eslint-disable @typescript-eslint/no-namespace */

export type RestaurantApprovalRequestAvroModel =
  ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantApprovalRequestAvroModel;

export namespace ComFoodOrderingSystemKafkaOrderAvroModel {
  export const RestaurantOrderStatusSchema =
    '{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}';
  export const RestaurantOrderStatusName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantOrderStatus';
  export type RestaurantOrderStatus = 'PAID';
  export const ProductSchema =
    '{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}';
  export const ProductName =
    'com.food.ordering.system.kafka.order.avro.model.Product';
  export interface Product {
    id: string;
    quantity: number;
  }
  export const RestaurantApprovalRequestAvroModelSchema =
    '{"namespace":"com.food.ordering.system.kafka.order.avro.model","type":"record","name":"RestaurantApprovalRequestAvroModel","fields":[{"name":"id","type":{"type":"string","logicalType":"uuid"}},{"name":"sagaId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantId","type":{"type":"string","logicalType":"uuid"}},{"name":"orderId","type":{"type":"string","logicalType":"uuid"}},{"name":"restaurantOrderStatus","type":{"type":"enum","name":"RestaurantOrderStatus","symbols":["PAID"]}},{"name":"products","type":{"type":"array","items":{"name":"Product","type":"record","fields":[{"name":"id","type":"string","logicalType":"uuid"},{"name":"quantity","type":"int"}]}}},{"name":"price","type":{"type":"long","logicalType":"decimal","precision":10,"scale":2}},{"name":"createdAt","type":{"type":"long","logicalType":"timestamp-millis"}}]}';
  export const RestaurantApprovalRequestAvroModelName =
    'com.food.ordering.system.kafka.order.avro.model.RestaurantApprovalRequestAvroModel';
  export interface RestaurantApprovalRequestAvroModel {
    id: string;
    sagaId: string;
    restaurantId: string;
    orderId: string;
    restaurantOrderStatus: ComFoodOrderingSystemKafkaOrderAvroModel.RestaurantOrderStatus;
    products: ComFoodOrderingSystemKafkaOrderAvroModel.Product[];
    price: number;
    createdAt: number;
  }
}
