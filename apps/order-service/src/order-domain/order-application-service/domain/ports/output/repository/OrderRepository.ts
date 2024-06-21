import { Order } from "@app/order-domain-core";
import { TrackingId } from "@app/order-domain-core";

export interface OrderRepository {
    save(order: Order):  Order;
    findByTrackingId(trackingId: TrackingId): Order | void;
}