import * as React from 'react';
import * as S from './style';
import Login from "./Login";

interface Props {
}

const Modal: React.FC<Props> = () => {
  return(
    <>
      <S.ModalOverlay/>
      <S.ModalContainer>
        <Login />
      </S.ModalContainer>
    </>
  );
}

export default Modal;