import { OrderApprovalStatus } from "@app/common";

export class RestaurantApprovalResponse {
    private sagaId: string;
    private orderId: string;
    private restaurantId: string;
    private createdAt: string;
    private orderApprovalStatus: OrderApprovalStatus;
    private failureMessages: string[];
}