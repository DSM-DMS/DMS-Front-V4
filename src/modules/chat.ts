const SET_IS_CHAT_OPENED = 'SET_IS_CHAT_OPENED' as any;

export const setIsChatOpened = (isChatOpened: boolean) => ({
  type: SET_IS_CHAT_OPENED,
  payload: isChatOpened,
});

type ChatAction = ReturnType<typeof setIsChatOpened>;

export type ChatState = {
  isChatOpened: boolean;
};

const initialState: ChatState = {
  isChatOpened: false,
};

export default function reducer(
  state = initialState,
  action: ChatAction,
): ChatState {
  switch (action.type) {
    case SET_IS_CHAT_OPENED:
      return {
        ...state,
        isChatOpened: action.payload,
      };
    default:
      return state;
  }
}
