import { Order, TrackingId } from "@app/order-domain-core";
import { OrderRepository } from "../domain";

export class OrderInMemoryRepository implements OrderRepository {
    save(order: Order) {
        this.orders.push(order);
        return order;
    }
    findByTrackingId(trackingId: TrackingId) {
        const order =  this.orders.find((order) => order.getTrackingId() === trackingId);
        return order;
    }
    private orders: Order[] = [];
    
}