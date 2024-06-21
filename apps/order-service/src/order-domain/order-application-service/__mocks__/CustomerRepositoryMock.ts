import { CustomerRepository } from "@app/order-domain-core";



const customerRepositoryMock: CustomerRepository = {
    findCustomer: jest.fn()
}