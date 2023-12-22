import { Order } from "src/models";

export class Deal {
    public readonly id: string;
    public readonly company_name: string;
    public readonly account_id: string;
    public readonly boost_role: string;
    public readonly dealname: string;
    public readonly dealstage: string;
    public readonly pipeline: string;


    constructor(order: Order) {
        this.company_name = order.companyName;
        this.account_id = order.accountId;
        this.boost_role = order.role;
        this.dealname = order.name;
        this.dealstage = 'appointmentscheduled' //Note: suppose to be "New", need to recreate pipeline stage 
        this.pipeline = 'default'
    }
}