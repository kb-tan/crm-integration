
export interface OrderProps {
    id: string;
    name: string;
    accountId: string;
    companyName: string;
    role: string;
    parentId?: string;
}

export class Order {

    public readonly id: string;
    public readonly companyName: string;
    public readonly accountId: string;
    public readonly role: string;
    public readonly name: string;
    // public readonly parentId: string | unknown;

    constructor(props: OrderProps) {
        this.id = props.id;
        this.name = props.name;
        this.companyName = props.companyName;
        this.accountId = props.accountId;
        this.role = props.role;
        // this.parentId = props.parentId;
    }
}
