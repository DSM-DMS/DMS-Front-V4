import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as apiType from '../../util/api/apiTypes';
import { StoreState } from '../../modules';
import { changeModal } from '../../modules/modal';
import { ModalTypes } from 'modules/modal';
import { LogIn } from '../../components';

interface LogInProps {}

const LogInContainer: React.FC<LogInProps> = () => {
  const dispatch = useDispatch();
  const changeModalType = useCallback((modalType: ModalTypes) => {
    dispatch(changeModal(modalType));
  }, []);

  const handleLogin = (
    loginParams: apiType.authParamType,
    isAutoLogin: string,
  ) => {
    console.log(loginParams, isAutoLogin);
  };
  return <LogIn changeModalType={changeModalType} handleLogin={handleLogin} />;
};

export default LogInContainer;
