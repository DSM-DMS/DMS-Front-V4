import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';
import modal, { ModalState } from './modal';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
  modal: ModalState;
}

export default combineReducers<StoreState>({ notice, chat, modal });
