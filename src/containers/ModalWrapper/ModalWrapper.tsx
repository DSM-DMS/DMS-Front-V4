import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { hideModal } from '../../modules/modal';
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
  const setModalHide = () => {
    dispatch(hideModal());
  };
  return (
    <ModalWrapper
      isVisible={isModalVisible}
      setModalHide={setModalHide}
      modalName={modalName}
      children={children}
    />
  );
};

export default ModalWrapperContainer;
