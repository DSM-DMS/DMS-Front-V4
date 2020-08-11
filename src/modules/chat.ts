const SET_IS_CHAT_OPENED = 'SET_IS_CHAT_OPENED' as const;
const SET_IS_CHAT_CHECKED = 'SET_IS_CHAT_CHECKED' as const;

export const setIsChatOpened = (isChatOpened: boolean) => ({
  type: SET_IS_CHAT_OPENED,
  payload: isChatOpened,
});

export const setIsChatChecked = () => ({
  type: SET_IS_CHAT_CHECKED,
});

type ChatAction =
  | ReturnType<typeof setIsChatOpened>
  | ReturnType<typeof setIsChatChecked>;

export type ChatState = {
  isChatOpened: boolean;
  isChatChecked: boolean;
};

const initialState: ChatState = {
  isChatOpened: false,
  isChatChecked: false,
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
    case SET_IS_CHAT_CHECKED:
      return {
        ...state,
        isChatChecked: true,
      };
    default:
      return state;
  }
}
