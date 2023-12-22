import { Handler } from 'express';
import { DSProvider, SourceEnum } from 'src/data/DataSourceProvider';
import { Order } from 'src/models';
import { OrderProps } from 'src/models/Order';
import { OrderRepository } from 'src/repositories/OrderRepository';


const createOrder = async(props: OrderProps): Promise<string> => {
    const dsp: DSProvider = new DSProvider({
        connectionString: "",
        orderDataSource: SourceEnum.HubSpot,
        campaignDataSource: SourceEnum.HubSpot
    });
    const orderRepo: OrderRepository = new OrderRepository(dsp.getOrderDS());
    const order:Order = new Order({...props});
    return await orderRepo.create(order);
}

export const orderHandler: Handler = async (_req, res) => {
    const {
        id = "",
        name = "",
        companyName = "",
        accountId = "",
        role = "",
        parentId = ""
    }  = _req.body;
    const oid: string = await createOrder({id, name, companyName, accountId, role, parentId});
    res.send(JSON.stringify({
        orderId: oid
    }));
};
