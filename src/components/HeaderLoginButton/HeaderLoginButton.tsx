import React, { useCallback } from 'react';
import * as S from './style';
import { ModalTypes } from '../../modules/modal';

interface Props {
  changeModalType: (modalType: ModalTypes) => void;
  setToggleModal: () => void;
}
const HeaderLoginButton: React.StatelessComponent<Props> = ({
  changeModalType,
  setToggleModal,
}) => {
  const changeToggleModal = useCallback(() => {
    changeModalType(ModalTypes.LogIn);
    setToggleModal();
  }, []);
  return (
    <S.OpenLoginModalButton onClick={changeToggleModal}>
      로그인
    </S.OpenLoginModalButton>
  );
};

export default HeaderLoginButton;
