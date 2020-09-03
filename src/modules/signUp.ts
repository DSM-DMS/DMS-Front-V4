import * as apiTypes from '../util/apiTypes';
import * as api from '../util/api';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'modules';

export const SIGN_UP = 'SIGN_UP' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;

export const signUp = () => ({
  type: SIGN_UP,
});

export const signUpSuccess = (signUpStatus: number) => ({
  type: SIGN_UP_SUCCESS,
  payload: signUpStatus,
});

export const signUpFailure = (signUpStatus: number) => ({
  type: SIGN_UP_FAILURE,
  payload: signUpStatus,
});

export const signUpThunk = (
  signUpParam: apiTypes.authParamType,
): ThunkAction<void, StoreState, null, SignUpAction> => async (dispatch) => {
  console.log('Asd');
  dispatch(signUp());
  try {
    const response = await api.signUpReq(signUpParam);
    dispatch(signUpSuccess(response));
  } catch (e) {
    dispatch(signUpFailure(e.status));
  }
};

type SignUpAction =
  | ReturnType<typeof signUp>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailure>;

export type SignUpState = {
  signUpStatus: number;
};

const initialState: SignUpState = {
  signUpStatus: 0,
};

export default function signUpReducer(
  state: SignUpState = initialState,
  action: SignUpAction,
) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state };
    case SIGN_UP_SUCCESS:
      return { ...state, signUpStatus: action.payload };
    case SIGN_UP_FAILURE:
      return { ...state, signUpStatus: action.payload };
    default:
      return { ...state };
  }
}
