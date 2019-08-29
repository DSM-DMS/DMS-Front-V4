import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator } from 'redux';
import { noticeTableStaticData } from '../static/notice';

const SET_SELECTED_TAG = 'SET_SELECTED_TAG';

export interface SetSelectedTag {
  type: 'SET_SELECTED_TAG';
  selectedTag: String;
  tableType: String;
  tableItems: Array<PostsTable | RulesTable | VolunteerTable>;
}

export type Action = SetSelectedTag;

export interface PostsTable {
  date: String;
  title: String;
  views: Number;
  contents: String;
}

export interface RulesTable {
  ruleTitle: String;
  rulePoint: Number;
}

export interface VolunteerTable {
  volunteerGrade: String;
  volunteerTitle: String;
  volunteerPoint: String;
}

export interface NoticeState {
  selectedTag: String;
  tableItems: Array<PostsTable | RulesTable | VolunteerTable>;
  tableType: String;
}

const initalState: NoticeState = {
  selectedTag: '안내사항',
  tableItems: [
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
  ],
  tableType: 'posts',
};

export const setSelectedTag = (
  selectedTag: String,
  tableType: String,
  tableItems: Array<PostsTable | RulesTable | VolunteerTable>,
): SetSelectedTag => ({
  type: SET_SELECTED_TAG,
  selectedTag,
  tableType,
  tableItems,
});

export const setSelectedTagThunk: ActionCreator<
  ThunkAction<Action, NoticeState, void, any>
> = (
  selectedTag: String,
  tableType: String,
  staticTableIndex: number,
) => dispatch => {
  if (tableType !== 'posts') {
    return dispatch(
      setSelectedTag(
        selectedTag,
        tableType,
        noticeTableStaticData[staticTableIndex],
      ),
    );
  }
  const postsList = [
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
  ];
  return dispatch(setSelectedTag(selectedTag, tableType, postsList));
};

export const noticeActions = {
  setSelectedTag,
  setSelectedTagThunk,
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
        tableType: action.tableType,
        tableItems: action.tableItems,
      };
    default:
      return state;
  }
}
