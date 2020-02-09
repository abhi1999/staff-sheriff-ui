import { BaseAction,JobsiteGeneratorActions, LookupGeneratorActions } from '../common';

// Action Creators 
export const getJobSitesStartAction = (): BaseAction => ({
    type: JobsiteGeneratorActions.GET_LOOKUP_SITES_START,
    payload: null,
});
  
export const getJobSitesCompletedAction = (data: any[]): BaseAction => ({
    type: JobsiteGeneratorActions.GET_LOOKUP_SITES_COMPLETED,
    payload: {data},
});

export const getAllLookupAction =():BaseAction => ({
    type: LookupGeneratorActions.GET_ALL_LOOKUP_START,
    payload: null,
});

export const createJobSitesStartAction = (jobsite:any): BaseAction => ({
    type: JobsiteGeneratorActions.CREATE_JOB_SITES_START,
    payload: jobsite,
});
  
export const createJobSitesCompleteAction = (jobsite:any): BaseAction => ({
    type: JobsiteGeneratorActions.CREATE_JOB_SITES_COMPLETED,
    payload: jobsite,
});