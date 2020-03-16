const SHOW = 'modal/SHOW' as const;
const HIDE = 'modal/HIDE' as const;
const CHANGE_MODAL = 'modal/CHANGE_MODAL' as const;
export enum modalTypes {
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

export const changeModal = (modalType: modalTypes) => ({
  type: CHANGE_MODAL,
  payload: modalType,
});

type ModalAction =
  | ReturnType<typeof showModal>
  | ReturnType<typeof hideModal>
  | ReturnType<typeof changeModal>;

export interface ModalState {
  isVisible: boolean;
  modalType: modalTypes;
}

const initialState: ModalState = {
  isVisible: true,
  modalType: modalTypes.LogIn,
};

function modal(state: ModalState = initialState, action: ModalAction) {
  switch (action.type) {
    case SHOW:
      return { isVisible: true };
    case HIDE:
      return { isVisible: false };
    case CHANGE_MODAL:
      return { modalTypes: action.payload };
    default:
      return state;
  }
}

export default modal;
