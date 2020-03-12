import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';
interface Props {}

const SignIn: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapper modalName="회원가입">
      <S.SignInContentWrapper>
        <ModalInput placeholder="확인코드" />
        <ModalInput placeholder="아이디" />
        <ModalInput placeholder="비밀번호" inputType="password" />
        <ModalInput placeholder="비밀번호 확인" inputType="password" />
      </S.SignInContentWrapper>
      <ModalButton buttonName="회원가입" />
    </ModalWrapper>
  );
};

export default SignIn;
