const SET_IS_CHAT_OPENED = 'SET_IS_CHAT_OPENED';

export interface SetIsChatOpened {
  type: 'SET_IS_CHAT_OPENED';
  isChatOpened: boolean;
}

export type Action = SetIsChatOpened;

export interface ChatState {
  isChatOpened: boolean;
}

const initalState: ChatState = {
  isChatOpened: false,
};

export const setIsChatOpened = (isChatOpened: boolean): SetIsChatOpened => ({
  type: SET_IS_CHAT_OPENED,
  isChatOpened,
});

export const chatActions = {
  setIsChatOpened,
};

export default function reducer(
  state = initalState,
  action: Action,
): ChatState {
  switch (action.type) {
    case SET_IS_CHAT_OPENED:
      return {
        ...state,
        isChatOpened: action.isChatOpened,
      };
    default:
      return state;
  }
}
