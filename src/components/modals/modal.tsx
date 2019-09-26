import * as React from 'react';
import * as S from './style';
import Login from "./Login";
import SignIn from "./SignIn"



interface Props {
}

const Modal: React.FC<Props> = () => {
  return(
    <>
      <S.ModalOverlay/>
      <S.ModalContainer>
        <SignIn/>
      </S.ModalContainer>
    </>
  );
}

export default Modal;