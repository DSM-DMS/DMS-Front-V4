import * as React from 'react';
import ModalCloseImg from '../../assets/icon/blue_close-mark.png';
import * as S from './style'


interface Props {
}

const Login: React.FC<Props> = () => {
  return(
    <div>
      <S.ModalNameWrapper>
        <S.ModalName>로그인</S.ModalName>
        <S.ModalClosebtn 
          src={ModalCloseImg}/>
      </S.ModalNameWrapper>

      <S.ModalContnetWrapper>
        <S.ModalInput 
          placeholder="아이디"/>
        <S.ModalInput
          placeholder="비밀번호" 
          type="password"/>
        <S.LoginBottom>
          
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn 
              type="checkbox"
            />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink>비밀번호 찾기</S.ForgetPWLink>
        </S.LoginBottom>
      </S.ModalContnetWrapper>
      
      <S.ModalBottomWrapper>
        <S.button>로그인</S.button>
          <S.SigninLinkWrapper>
            <span>아직 DMS 회원이 아니시라면?</span>
            <S.SigninLink>회원가입</S.SigninLink>
          </S.SigninLinkWrapper> 
        </S.ModalBottomWrapper>
    </div>
  )
}

export default Login;