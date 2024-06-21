import { IsDefined } from "class-validator";
import { UUID } from "crypto";


export class TrackOrderQuery {
    @IsDefined()
    private readonly orderTrackingId: UUID;
    public getOrderTrackingId(): UUID {
        return this.orderTrackingId;
    }
}