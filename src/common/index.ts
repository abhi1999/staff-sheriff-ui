export const NumberGeneratorActions ={
    GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
    GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.'
}

export const JobsiteGeneratorActions ={
    GET_LOOKUP_SITES_START:'[0] Request all jobsites async service',
    GET_LOOKUP_SITES_COMPLETED:'[1] sites async service returned data',
    CREATE_JOB_SITES_START:'[0] Request to create jobsiteasync service',
    CREATE_JOB_SITES_COMPLETED:'[0] Request to create jobsiteasync service',
}

export const LookupGeneratorActions ={
    GET_ALL_LOOKUP_START:'[-1] All Lookup data requested',
}


export interface BaseAction {
    type : string;
    payload?:any;
}

export interface INotifyOptions{
    title?:string,
    message:string,
    uuid?:number,
    autoDismiss?:number,
    position?:"tr"|"tl"|"tc"|"br"|"bl"|"bc",
    dismissible?:boolean,
    action?:any,
    level?:"success"|"error"|"warning"|"info"
}