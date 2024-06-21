import { OrderDomainService, OrderDomainServiceImpl } from "@app/order-domain-core";

jest.mock("@app/order-domain-core");

export class OrderTestConfiguration {
    orderDomainService(): OrderDomainService {
        return new OrderDomainServiceImpl();
    }
}