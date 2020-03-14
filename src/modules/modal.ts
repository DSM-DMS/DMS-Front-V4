const SHOW = 'modal/SHOW' as const;
const HIDE = 'modal/HIDE' as const;
// const CHANGE_INPUT = 'modal/CHANGE_INPUT' as const;

export const showModal = () => ({
  type: SHOW,
});
export const hideModal = () => ({
  type: HIDE,
});

// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   payload: input,
// });

type ModalAction = ReturnType<typeof showModal> | ReturnType<typeof hideModal>;

export type ModalState = {
  isVisible: boolean;
};

const initialState: ModalState = {
  isVisible: false,
};

function modal(state: ModalState = initialState, action: ModalAction) {
  switch (action.type) {
    case SHOW:
      return { isVisible: true };
    case HIDE:
      return { isVisible: false };
    default:
      return state;
  }
}

export default modal;
