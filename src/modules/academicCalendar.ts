import { ThunkAction } from 'redux-thunk';
import { getScheduleReq } from '../util/api/api';
import { AxiosError } from 'axios';
import * as apiTypes from '../util/api/apiTypes';
import * as api from '../util/api/api';

const GET_SCHEDULE = 'GET_SCHEDULE' as const;
const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS' as const;
const GET_SCHEDULE_FAILURE = 'GET_SCHEDULE_FAILURE' as const;

const getSchedule = () => ({
  type: GET_SCHEDULE,
});
const getScheduleSuccess = (schedule: apiTypes.scheduleType) => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: schedule,
});

const getScheduleError = (err: AxiosError) => ({
  type: GET_SCHEDULE_FAILURE,
  payload: err,
});

type AcademicCalendarAction =
  | ReturnType<typeof getSchedule>
  | ReturnType<typeof getScheduleSuccess>
  | ReturnType<typeof getScheduleError>;

// export function getScheduleThunk(
//   day: string,
// ): ThunkAction<
//   Promise<void>,
//   AcademicCalendarState,
//   null,
//   AcademicCalendarAction
// > {
//   return async dispatch => {
//     dispatch({ type: GET_SCHEDULE });
//     try {
//       const response = await getRequest('/info/schedule/', day);
//       dispatch(getScheduleSuccess(response.data));
//     } catch (e) {
//       dispatch(getScheduleError(e));
//     }
//   };
// }

export const getScheduleThunk = (date: string) => (dispatch) => {
  dispatch({ type: GET_SCHEDULE });
  const scheduleData = api
    .getScheduleReq(date)
    .then(() => dispatch(getScheduleSuccess(scheduleData)))
    .catch(() => dispatch(getScheduleError));
};

export interface AcademicCalendarState {
  data: apiTypes.scheduleType | null;
  error: any | null;
}

const initialState: AcademicCalendarState = {
  data: {
    schedule: [
      {
        name: '정보보안과 대전교육정보원 체험학습',
        time: '오전 09:00 ~ 오후 12:00',
        place: '대전교육정보원',
      },
    ],
  },
  error: null,
};

function academicCalendar(
  state = initialState,
  action: AcademicCalendarAction,
): AcademicCalendarState {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
      };
    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_SCHEDULE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
  }
}

export default academicCalendar;
