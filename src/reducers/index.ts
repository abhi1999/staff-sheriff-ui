import { combineReducers } from 'redux';

import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';

import {reducer as notifications} from 'react-notification-system-redux';
 

export interface IApplicationState {
  numberCollection: NumberCollectionState;
  notifications: any
}

export const rootReducers = combineReducers<IApplicationState>({
  numberCollection: numberCollectionReducer,
  notifications: notifications
});