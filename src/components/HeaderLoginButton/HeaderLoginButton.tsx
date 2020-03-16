import React from 'react';
import * as S from './style';
import { modalTypes } from '../../modules/modal';

interface Props {
  changeModalType: (modalType: modalTypes) => void;
}
const HeaderLoginButton: React.StatelessComponent<Props> = ({
  changeModalType,
}) => {
  return (
    <S.OpenLoginModalButton onClick={() => changeModalType(modalTypes.LogIn)}>
      로그인
    </S.OpenLoginModalButton>
  );
};

export default HeaderLoginButton;
