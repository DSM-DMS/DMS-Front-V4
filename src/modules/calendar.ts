import moment from 'moment';

const CHANGE_SELECTED_DAY = 'CHANGE_SELECTED_DAY' as const;

export const changeSelectedDay = (day: string) => ({
  type: CHANGE_SELECTED_DAY,
  payload: day,
});

type CalendarAction = ReturnType<typeof changeSelectedDay>;

export interface CalendarState {
  selectedDay: string;
}

const initialState: CalendarState = {
  selectedDay: moment().format('YYYY MM DD'),
};

function calendar(state = initialState, action: CalendarAction): CalendarState {
  switch (action.type) {
    case CHANGE_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };
    default:
      return state;
  }
}

export default calendar;
