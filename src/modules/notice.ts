import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SET_SELECTED_TAG = 'SET_SELECTED_TAG';

export interface SetSelectedTag {
  type: 'SET_SELECTED_TAG';
  selectedTag: string;
}

export type Action = SetSelectedTag;

export const setSelectedTag = (selectedTag: string): SetSelectedTag => ({
  type: SET_SELECTED_TAG,
  selectedTag,
});

export interface NoticeState {
  selectedTag: string;
}

const initalState: NoticeState = {
  selectedTag: '안내사항',
};

export const noticeActions = {
  setSelectedTag,
};

export default function reducer(
  state = initalState,
  action: Action,
): NoticeState {
  switch (action.type) {
    case SET_SELECTED_TAG:
      return {
        ...state,
        selectedTag: action.selectedTag,
      };
    default:
      return state;
  }
}
