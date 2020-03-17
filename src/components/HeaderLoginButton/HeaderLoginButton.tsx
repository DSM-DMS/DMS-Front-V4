import React from 'react';
import * as S from './style';
import { ModalTypes } from '../../modules/modal';

interface Props {
  changeModalType: (modalType: ModalTypes) => void;
}
const HeaderLoginButton: React.StatelessComponent<Props> = ({
  changeModalType,
}) => {
  return (
    <S.OpenLoginModalButton onClick={() => changeModalType(ModalTypes.LogIn)}>
      로그인
    </S.OpenLoginModalButton>
  );
};

export default HeaderLoginButton;
