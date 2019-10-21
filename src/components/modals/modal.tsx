import * as React from 'react';
import * as S from './style';
import Login from './Login';
import SignIn from './SignIn';
import ChangePW from './ChangePW';
import BugReport from './BugReport';

interface Props {
}

const Modal: React.StatelessComponent<Props> = () => {
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