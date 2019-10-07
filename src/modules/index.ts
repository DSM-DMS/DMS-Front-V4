import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
}

export default combineReducers<StoreState>({ notice, chat });
