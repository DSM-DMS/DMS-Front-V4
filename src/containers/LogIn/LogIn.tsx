import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { changeModal } from '../../modules/modal';
import { ModalTypes } from 'modules/modal';
import { LogIn } from '../../components';

interface LogInProps {}

const LogInContainer: React.FC<LogInProps> = () => {
  const dispatch = useDispatch();
  const changeModalType = (modalType: ModalTypes) => {
    dispatch(changeModal(modalType));
  };
  return <LogIn changeModalType={changeModalType} />;
};

export default LogInContainer;
