import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';
import calendar, { CalendarState } from './calendar';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
  calendar: CalendarState;
}

export default combineReducers<StoreState>({ notice, chat, calendar });
