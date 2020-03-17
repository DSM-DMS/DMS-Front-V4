import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';
import { ModalTypes } from '../../../modules/modal';
interface Props {
  changeModalType: (modalType: ModalTypes) => void;
}

const LogIn: React.StatelessComponent<Props> = ({ changeModalType }) => {
  return (
    <ModalWrapperContainer modalName="로그인">
      <S.LogInContnetWrapper>
        <ModalInput placeholder="아이디" />
        <ModalInput placeholder="비밀번호" inputType="password" />
        <S.LoginBottom>
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn type="checkbox" />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink onClick={() => changeModalType(ModalTypes.ChangePW)}>
            비밀번호 찾기
          </S.ForgetPWLink>
        </S.LoginBottom>
      </S.LogInContnetWrapper>
      <ModalButton buttonName={'로그인'} />
      <S.SignInLinkWrapper>
        <span>아직 DMS 회원이 아니시라면?</span>
        <S.SignInLink onClick={() => changeModalType(ModalTypes.SignIn)}>
          회원가입
        </S.SignInLink>
      </S.SignInLinkWrapper>
    </ModalWrapperContainer>
  );
};

export default LogIn;
