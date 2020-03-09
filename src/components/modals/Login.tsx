import * as React from 'react';
import CloseImg from '../../assets/icon/black-close-button.png';
import * as S from './style';

interface Props {}

const LogIn: React.StatelessComponent<Props> = () => {
  return (
    <>
      <S.ModalNameWrapper>
        <S.ModalName>로그인</S.ModalName>
        <S.ModalClosebtn src={CloseImg} />
      </S.ModalNameWrapper>

      <S.LogInContnetWrapper>
        <S.ModalInput placeholder="아이디" />
        <S.ModalInput placeholder="비밀번호" type="password" />
        <S.LoginBottom>
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn type="checkbox" />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink>비밀번호 찾기</S.ForgetPWLink>
        </S.LoginBottom>
      </S.LogInContnetWrapper>

      <S.ModalSubmitBtn>로그인</S.ModalSubmitBtn>
      <S.SignInLinkWrapper>
        <span>아직 DMS 회원이 아니시라면?</span>
        <S.SignInLink>회원가입</S.SignInLink>
      </S.SignInLinkWrapper>
    </>
  );
};

export default LogIn;
