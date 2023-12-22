import { AdCampaign } from "src/models/AdCampaign";
import { DataSource } from "./DataSourceProvider";
import { Order } from "src/models/Order";
import { Client } from '@hubspot/api-client';
import { SimplePublicObject as DealObject } from "@hubspot/api-client/lib/codegen/crm/deals/models/SimplePublicObject";
import { Deal } from "./entities/hubspot/Deal";
import { rootLogger } from '../framework/logging';

export class DSHubSpotDeal implements DataSource<Order> {

    private hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY})
    
    create(data: Order): Promise<string>{
        return this.createDeal(data);
    }

    update(data: Order): Promise<string> {
        return this.updateDeal(data);
    }

    get(id: string): Promise<Order> {
        return this.getDeal(id);
    }

    remove(id: string): Promise<string> {
        return this.removeDeal(id);
    }

    private async createDeal(data: Order): Promise<string> {
        const dealObj = {
            properties: {...new Deal(data)},
            associations: []
        }
        rootLogger.info('sending deal object:');
        rootLogger.info(new Deal(data));
        const obj:DealObject = await this.hubspotClient.crm.deals.basicApi.create(dealObj);
        return obj.id;
    }

    private async updateDeal(data: Order): Promise<string>  {
        throw new Error("Connection to HubSpot to be implemented");
    }

    private async getDeal(id: string): Promise<Order> {
        throw new Error("Connection to HubSpot to be implemented");
    }
 
    private async removeDeal(data: string): Promise<string> {
        throw new Error("Connection to HubSpot to be implemented");
    }
}

export class DSHubSpotTicket implements DataSource<AdCampaign> {
    create(data: AdCampaign): Promise<string> {
        return this.createTicket(data);
    }
    update(data: AdCampaign): Promise<string> {
        return this.updateTicket(data);
    }
    get(id: string): Promise<AdCampaign> {
        return this.getTicket(id);
    }
    remove(id: string): Promise<string> {
        return this.removeTicket(id);
    }

    private async createTicket(data: AdCampaign): Promise<string>  {
        throw new Error("Connection to HubSpot to be implemented");
    }

    private async updateTicket(data: AdCampaign): Promise<string>  {
        throw new Error("Connection to HubSpot to be implemented");
    }

    private async getTicket(id: string): Promise<AdCampaign> {
        throw new Error("Connection to HubSpot to be implemented");
    }

    private async removeTicket(data: string): Promise<string> {
        throw new Error("Connection to HubSpot to be implemented");
    }

}