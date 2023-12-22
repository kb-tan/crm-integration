import { Order } from "src/models/Order";
import { IRepository } from "./IRepository";
import { DataSource } from "src/data/DataSourceProvider";

export class OrderRepository implements IRepository<Order> {

    private ds: DataSource<Order>;
    constructor(ds: DataSource<Order>) {
        this.ds = ds;
    }
    /* TODO */
    async create(data: Order): Promise<string> {
        return await this.ds.create(data);
    }

    async update(data: Order): Promise<string> {
        return await this.ds.update(data);
    }

    async remove(id: string): Promise<string> {
        return await this.ds.remove(id);
    }

    async get(id: string): Promise<Order> {
        return await this.ds.get(id);
    }
}