import * as React from 'react';
import ModalCloseImg from '../../assets/icon/blue_close-mark.png';
import * as S from './style';

interface Props{
}

const SignIn: React.FC<Props> =()=> {
  return(
    <>
      <S.ModalNameWrapper>
        <S.ModalName>회원가입</S.ModalName>
        <S.ModalClosebtn 
          src={ModalCloseImg}/>
      </S.ModalNameWrapper>

      <S.SigninContentWrapper>
        <S.ModalInput
          placeholder="확인코드"/>
        <S.ModalInput 
          placeholder="아이디"/>
        <S.ModalInput 
          placeholder="비밀번호"
          type="password"/>
        <S.ModalInput
          placeholder="비밀번호 확인"
          type="password"/>
      </S.SigninContentWrapper>


      <S.button>회원가입</S.button>
    </>
  );
}

export default SignIn;