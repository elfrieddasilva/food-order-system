import { UUID } from "crypto";
import { BaseId } from "./BaseId";

export class OrderId extends BaseId<UUID> {
    constructor(value: UUID) {
        super(value);
    }
}