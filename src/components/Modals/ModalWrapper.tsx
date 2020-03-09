import * as React from 'react';
import * as S from './style';
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import ChangePW from './ChangePW/ChangePW';
import BugReport from './BugReport/BugReport';

interface Props {}

const ModalWrapper: React.StatelessComponent<Props> = () => {
  return (
    <>
      <S.ModalOverlay />
      <S.ModalContainer>{React.Children}</S.ModalContainer>
    </>
  );
};

export default ModalWrapper;
