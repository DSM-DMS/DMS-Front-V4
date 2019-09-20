const SET_IS_SELECTED_OPEN = 'SET_IS_CHAT_OPEN';

export interface SetIsChatOpen {
  type: 'SET_IS_CHAT_OPEN';
  isChatOpen: boolean;
}

export type Action = SetIsChatOpen;

export interface ChatState {
  isChatOpen: boolean;
}

const initalState: ChatState = {
  isChatOpen: false,
};

export const setIsChatOpen = (isChatOpen: boolean): SetIsChatOpen => ({
  type: SET_IS_SELECTED_OPEN,
  isChatOpen,
});

export const chatActions = {
  setIsChatOpen,
};

export default function reducer(
  state = initalState,
  action: Action,
): ChatState {
  switch (action.type) {
    case SET_IS_SELECTED_OPEN:
      return {
        ...state,
        isChatOpen: action.isChatOpen,
      };
    default:
      return state;
  }
}
