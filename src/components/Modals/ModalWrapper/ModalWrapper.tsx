import React, { ReactNode } from 'react';
import * as S from './style';
import CloseImg from '../../../assets/icon/black-close-button.png';

interface Props {
  isVisible: boolean;
  modalName: string;
  children: ReactNode;
  setModalHide: () => void;
}

const ModalWrapper: React.StatelessComponent<Props> = ({
  modalName,
  children,
  isVisible,
  setModalHide,
}) => {
  return (
    <S.ModalWrapper isVisible={isVisible}>
      <S.ModalOverlay onClick={setModalHide} />
      <S.ModalContainer>
        <S.ModalNameWrapper>
          <S.ModalName>{modalName}</S.ModalName>
          <S.ModalClosebtn src={CloseImg} onClick={setModalHide} />
        </S.ModalNameWrapper>
        {children}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ModalWrapper;
