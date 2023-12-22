import {
    DSHubSpotTicket,
    DSHubSpotDeal,
    DSSalesforceCase,
    DSSalesforceUsage
} from ".";

export interface DataSource<T> {
    create(data: T): Promise<string>;
    update(data: T): Promise<string>;
    get(id: string): Promise<T>;
    remove(id: string): Promise<string>; 
}

export enum SourceEnum {
    HubSpot = "HubSpot",
    Salesforce = "Salesforce",
}

export type SourceType = SourceEnum.HubSpot| SourceEnum.Salesforce;

export interface DSProviderProps {
    connectionString: string;
    orderDataSource: SourceType; 
    campaignDataSource: SourceType;
}

export class DSProvider {

    private orderDS: DSHubSpotDeal | DSSalesforceCase;
    private campaignDS: DSHubSpotTicket | DSSalesforceUsage;

    public constructor(dspProps: DSProviderProps) {
        (dspProps.orderDataSource === SourceEnum.HubSpot) ? 
            this.orderDS = new DSHubSpotDeal():
            this.orderDS = new DSSalesforceCase();

        (dspProps.campaignDataSource === SourceEnum.HubSpot) ?
            this.campaignDS = new DSHubSpotTicket():
            this.campaignDS = new DSSalesforceUsage();
    }

    getOrderDS (): DSHubSpotDeal|DSSalesforceCase  {
        return this.orderDS;
    }

    getAdCampaignDS (): DSHubSpotTicket|DSSalesforceUsage {
        return this.campaignDS;
    }
}

