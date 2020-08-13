import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';
import calendar, { CalendarState } from './calendar';
import modal, { ModalState } from './modal';
import meal, { MealState } from './meal';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
  calendar: CalendarState;
  modal: ModalState;
  meal: MealState;
}

export default combineReducers<StoreState>({
  notice,
  chat,
  modal,
  calendar,
  meal,
});
