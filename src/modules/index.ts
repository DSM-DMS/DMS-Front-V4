import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';
import calendar, { CalendarState } from './calendar';
import modal, { ModalState } from './modal';
import meal, { MealState } from './meal';
import academicCalendar, { AcademicCalendarState } from './academicCalendar';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
  calendar: CalendarState;
  modal: ModalState;
  meal: MealState;
  academicCalendar: AcademicCalendarState;
}

export default combineReducers<StoreState>({
  notice,
  chat,
  modal,
  calendar,
  meal,
  academicCalendar,
});
