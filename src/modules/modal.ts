const SHOW = 'modal/SHOW' as const;
const HIDE = 'modal/HIDE' as const;
const CHANGE_MODAL = 'modal/CHANGE_MODAL' as const;
export enum ModalTypes {
  none = 'none',
  LogIn = 'LogIn',
  SignIn = 'SignIn',
  BugReport = 'BugReport',
  ChangePW = 'ChangePW',
}
export const showModal = () => ({
  type: SHOW,
});
export const hideModal = () => ({
  type: HIDE,
});

export const changeModal = (modalType: ModalTypes) => ({
  type: CHANGE_MODAL,
  payload: modalType,
});

type ModalAction =
  | ReturnType<typeof showModal>
  | ReturnType<typeof hideModal>
  | ReturnType<typeof changeModal>;

export interface ModalVisibleState {
  isVisible: boolean;
}
export interface ModalTypeState {
  modalType: ModalTypes;
}
export type ModalState = ModalVisibleState | ModalTypeState;

const initialState: ModalState = {
  isVisible: false,
  modalType: ModalTypes.none,
};

function modal(state: ModalState = initialState, action: ModalAction) {
  switch (action.type) {
    case SHOW:
      return { isVisible: true };
    case HIDE:
      return { isVisible: false };
    case CHANGE_MODAL:
      return { modalType: action.payload, isVisible: true };
    default:
      return state;
  }
}

export default modal;
