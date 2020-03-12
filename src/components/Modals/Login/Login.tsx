import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';

interface Props {}

const LogIn: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapper modalName="로그인">
      <S.LogInContnetWrapper>
        <ModalInput placeholder="아이디" />
        <ModalInput placeholder="비밀번호" inputType="password" />
        <S.LoginBottom>
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn type="checkbox" />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink>비밀번호 찾기</S.ForgetPWLink>
        </S.LoginBottom>
      </S.LogInContnetWrapper>
      <ModalButton buttonName={'로그인'} />
      <S.SignInLinkWrapper>
        <span>아직 DMS 회원이 아니시라면?</span>
        <S.SignInLink>회원가입</S.SignInLink>
      </S.SignInLinkWrapper>
    </ModalWrapper>
  );
};

export default LogIn;
