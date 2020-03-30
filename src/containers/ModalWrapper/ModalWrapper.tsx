import React, { ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { toggleModal } from '../../modules/modal';
import { ModalWrapper } from '../../components';

interface Props {
  modalName: string;
  children: ReactNode;
}

const ModalWrapperContainer: React.FC<Props> = ({ modalName, children }) => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(
    (state: StoreState) => state.modal.isVisible,
  );
  const setToggleModal = useCallback(() => {
    dispatch(toggleModal());
  }, []);
  return (
    <ModalWrapper
      isVisible={isModalVisible}
      setToggleModal={setToggleModal}
      modalName={modalName}
      children={children}
    />
  );
};

export default ModalWrapperContainer;
