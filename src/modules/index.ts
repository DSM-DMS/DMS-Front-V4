import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';

export interface StoreState {
  notice: NoticeState;
}

export default combineReducers<StoreState>({ notice });
