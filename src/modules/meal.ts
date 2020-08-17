import { getMealReq } from '../util/api/api';
import * as apiTypes from '../util/api/apiTypes';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'modules';

export const GET_MEAL = 'GET_MEAL' as const;
export const GET_MEAL_SUCCESS = 'GET_MEAL_SUCCESS' as const;
export const GET_MEAL_FAILURE = 'GET_MEAL_FAILURE' as const;

export const getMeal = () => ({
  type: GET_MEAL,
});

export const getMealSuccess = (meal: apiTypes.mealType) => ({
  type: GET_MEAL_SUCCESS,
  payload: meal,
});

export const getMealFailure = (err) => ({
  type: GET_MEAL_FAILURE,
  payload: err,
});

export const getMealThunk = (
  date: string,
): ThunkAction<void, StoreState, null, MealAction> => async (dispatch) => {
  dispatch(getMeal());
  try {
    const response = await getMealReq(date);
    dispatch(getMealSuccess(response[0]));
  } catch (err) {
    dispatch(getMealFailure(err.status));
  }
};

type MealAction =
  | ReturnType<typeof getMeal>
  | ReturnType<typeof getMealSuccess>
  | ReturnType<typeof getMealFailure>;

export interface MealState {
  meal: apiTypes.mealType | null;
  errorStatus: any | null;
}

const initialState: MealState = {
  meal: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  errorStatus: null,
};

export default function meal(
  state = initialState,
  action: MealAction,
): MealState {
  switch (action.type) {
    case GET_MEAL:
      return { ...state };
    case GET_MEAL_SUCCESS:
      return { ...state, meal: action.payload };
    case GET_MEAL_FAILURE:
      return { ...state, errorStatus: action.payload };
    default:
      return { ...state };
  }
}
