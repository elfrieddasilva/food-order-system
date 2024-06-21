import { BaseId } from "@app/common";

export class OrderItemId extends BaseId<number> {
    constructor(value: number) {
        super(value);
    }
}