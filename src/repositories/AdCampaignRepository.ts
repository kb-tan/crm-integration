import { AdCampaign } from "src/models/AdCampaign";
import { IRepository } from "./IRepository";
import { DataSource } from "src/data/DataSourceProvider";

export class AdCampaignRepository implements IRepository<AdCampaign> {

    private ds: DataSource<AdCampaign>;
    constructor(ds: DataSource<AdCampaign>) {
        this.ds = ds;
    }

    async create(data: AdCampaign): Promise<string> {
        return await this.ds.create(data);
    }
    async update(data: AdCampaign): Promise<string> {
        return await this.ds.update(data);
    }
    async remove(id: string): Promise<string> {
        return await this.ds.remove(id);
    }

    async get(id: string): Promise<AdCampaign> {
        return await this.ds.get(id);
    }
}