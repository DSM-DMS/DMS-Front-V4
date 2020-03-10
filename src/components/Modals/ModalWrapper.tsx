import React, { ReactNode } from 'react';
import * as S from './style';
import CloseImg from '../../assets/icon/black-close-button.png';

interface Props {
  modalName: string;
  children: ReactNode;
}

const ModalWrapper: React.StatelessComponent<Props> = ({
  modalName,
  children,
}) => {
  return (
    <>
      <S.ModalOverlay />
      <S.ModalContainer>
        <S.ModalNameWrapper>
          <S.ModalName>{modalName}</S.ModalName>
          <S.ModalClosebtn src={CloseImg} />
        </S.ModalNameWrapper>
        {children}
      </S.ModalContainer>
    </>
  );
};

export default ModalWrapper;
