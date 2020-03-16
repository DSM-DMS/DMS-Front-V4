import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { showModal, modalTypes } from '../../modules/modal';
import { LogIn, SignIn, BugReport, ChangePW } from '../../components';

interface Props {}
const ModalContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const modalType: modalTypes = useSelector(
    (state: StoreState) => state.modal.modalType,
  );

  const isModalVisible = useSelector(
    (state: StoreState) => state.modal.isVisible,
  );
  const setModalShow = () => {
    dispatch(showModal);
  };
  const switchShowModal = (modalType: modalTypes): ReactNode => {
    switch (modalType) {
      case modalTypes.LogIn:
        return <LogIn />;
      case modalTypes.SignIn:
        return <SignIn />;
      case modalTypes.BugReport:
        return <BugReport />;
      case modalTypes.ChangePW:
        return <ChangePW />;
      case modalTypes.none:
        return null;
      default:
        return null;
    }
  };
  useEffect(() => {
    console.log('a : ' + modalType);
  });
  return <div>{switchShowModal(modalType)}</div>;
};

export default ModalContainer;
