import { AdCampaign } from "src/models/AdCampaign";
import { DataSource } from "./DataSourceProvider";
import { Order } from "src/models/Order";
import { Usage } from 'src/data/entities/salesforce/Usage';
import { Case } from 'src/data/entities/salesforce/Case';


export class DSSalesforceCase implements DataSource<Order> {

    create(data: Order): Promise<string>{
        return this.createCase(data);
    }

    update(data: Order): Promise<string> {
        return this.updateCase(data);
    }

    get(id: string): Promise<Order> {
        return this.getCase(id);
    }

    remove(id: string): Promise<string> {
        return this.removeCase(id);
    }

    private async createCase(data: Case): Promise<string> {
        throw new Error("Connection to Salesforce to be implemented");
    }

    private async updateCase(data: Case): Promise<string>  {
        throw new Error("Connection to Salesforce to be implemented");
    }

    private async getCase(id: string): Promise<Order> {
        throw new Error("Connection to Salesforce to be implemented");
    }
 
    private async removeCase(id: string): Promise<string> {
        throw new Error("Connection to Salesforce to be implemented");
    }
}

export class DSSalesforceUsage implements DataSource<AdCampaign> {

    create(data: AdCampaign): Promise<string> {
        return this.createUsage(data);
    }
    update(data: AdCampaign): Promise<string> {
        return this.updateUsage(data);
    }
    get(id: string): Promise<AdCampaign> {
        return this.getUsage(id);
    }
    remove(id: string): Promise<string> {
        return this.removeUsage(id);
    }

    private async createUsage(data: Usage): Promise<string>  {
        throw new Error("Connection to Salesforce to be implemented");
    }

    private async updateUsage(data: Usage): Promise<string>  {
        throw new Error("Connection to Salesforce to be implemented");
    }

    private async getUsage(data: Usage): Promise<AdCampaign> {
        throw new Error("Connection to Salesforce to be implemented");
    }

    private async removeUsage(data: string): Promise<string> {
        throw new Error("Connection to Salesforce to be implemented");
    }

}