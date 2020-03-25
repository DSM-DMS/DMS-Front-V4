const TOGGLE_MODAL = 'modla/TOGGLE_MODAL' as const;
const CHANGE_MODAL = 'modal/CHANGE_MODAL' as const;
export enum ModalTypes {
  none = 'none',
  LogIn = 'LogIn',
  SignIn = 'SignIn',
  BugReport = 'BugReport',
  ChangePW = 'ChangePW',
}
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const changeModal = (modalType: ModalTypes) => ({
  type: CHANGE_MODAL,
  payload: modalType,
});

type ModalAction =
  | ReturnType<typeof toggleModal>
  | ReturnType<typeof changeModal>;

export interface ModalState {
  isVisible: boolean;
  modalType: ModalTypes;
}

const initialState: ModalState = {
  isVisible: false,
  modalType: ModalTypes.none,
};

function modal(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isVisible: !state.isVisible };
    case CHANGE_MODAL:
      return { ...state, modalType: action.payload };
    default:
      return state;
  }
}

export default modal;
