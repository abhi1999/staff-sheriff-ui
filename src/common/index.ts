export const NumberGeneratorActions ={
    GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
    GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.'
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