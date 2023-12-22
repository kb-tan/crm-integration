
export interface AdCampaignProps {
    orderId: string;
    jobId: string;
    advertiserId: string;
    experiment: string;
    role: string;
    classificationName: string;
    subclassificationName: string;
    parentAdvertiserId: string;
    parentAdvertiserName: string;
    jobTitle: string;
    url: string;
    locationDesc: string;
    areaDesc: string;
    suburbDesc: string;
    salary: string;
    additionalText: string;
    workType: string;
    jobSummary: string;
    logoUrl: string;
    heroImageUrl: string;
    startDate: string;
    creativeId: string;
    extractDate: string;
    packageId: string;
    duration: string;
    utm: string;
    campaignId: string | unknown;
}

export class AdCampaign {
    public readonly orderId: string;
    public readonly jobId: string;
    public readonly advertiserId: string;
    public readonly experiment: string;
    public readonly role: string;
    public readonly classificationName: string;
    public readonly subclassificationName: string;
    public readonly parentAdvertiserId: string;
    public readonly	parentAdvertiserName: string;
    public readonly jobTitle: string;
    public readonly url: string;
    public readonly locationDesc: string;
    public readonly areaDesc: string;
    public readonly suburbDesc: string;
    public readonly salary: string;
    public readonly additionalText: string;
    public readonly workType: string;
    public readonly jobSummary: string;
    public readonly logoUrl: string;
    public readonly heroImageUrl: string;
    public readonly startDate: string;
    public readonly creativeId: string;
    public readonly extractDate: string;
    public readonly packageId: string;
    public readonly duration: string;
    public readonly utm: string;

    constructor(props: AdCampaignProps) {
        
        this.orderId = props.orderId;
        this.jobId = props.jobId;
        this.advertiserId = props.advertiserId;
        this.experiment = props.experiment;
        this.role = props.role;
        this.classificationName = props.classificationName;
        this.subclassificationName = props.subclassificationName;
        this.parentAdvertiserId = props.parentAdvertiserId;
        this.parentAdvertiserName = props.parentAdvertiserName;
        this.jobTitle = props.jobTitle;
        this.url = props.url;
        this.locationDesc = props.locationDesc;
        this.areaDesc = props.areaDesc;
        this.suburbDesc = props.suburbDesc;
        this.salary = props.salary;
        this.additionalText = props.additionalText;
        this.workType = props.workType;
        this.jobSummary = props.jobSummary;
        this.logoUrl = props.logoUrl;
        this.heroImageUrl = props.heroImageUrl;
        this.startDate = props.startDate;
        this.creativeId = props.creativeId;
        this.extractDate = props.extractDate;
        this.packageId = props.packageId;
        this.duration = props.duration;
        this.utm = props.utm;
    }

    public set campaignId(campaignId: string) {
        this.campaignId = campaignId;
    }

    public get campaignId() {
        return this.campaignId;
    }
}