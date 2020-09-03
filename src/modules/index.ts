import { combineReducers } from 'redux';
import notice, { NoticeState } from './notice';
import chat, { ChatState } from './chat';
import modal, { ModalState } from './modal';
import signUp, { SignUpState } from './signUp';

export interface StoreState {
  notice: NoticeState;
  chat: ChatState;
  modal: ModalState;
  signUp: SignUpState;
}

export default combineReducers<StoreState>({ notice, chat, modal, signUp });
