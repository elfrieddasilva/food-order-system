import { UUID } from "crypto";
import { BaseId } from "./BaseId";

export class ProductId extends BaseId<UUID> {
    constructor(value: UUID) {
        super(value);
    }
}