import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';
import { ModalTypes } from '../../../modules/modal';
interface Props {
  changeModalType: (modalType: ModalTypes) => void;
}

const LogIn: React.StatelessComponent<Props> = ({ changeModalType }) => {
  const [loginInput, setLoginInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { id: '', password: '', isAutoLogin: false },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newValue = e.target.value;
    console.log(e.target.value, e.target.name);
    setLoginInput({ [name]: newValue });
  };

  const handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    setLoginInput({ isAutoLogin: e.currentTarget.checked });
  };

  return (
    <ModalWrapperContainer modalName="로그인">
      <S.LogInContnetWrapper>
        <ModalInput
          placeholder="아이디"
          inputName="id"
          value={loginInput.id}
          changeEvent={handleChange}
        />
        <ModalInput
          placeholder="비밀번호"
          inputType="password"
          inputName="password"
          value={loginInput.password}
          changeEvent={handleChange}
        />
        <S.LoginBottom>
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn type="checkbox" onClick={handleCheck} />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink onClick={() => changeModalType(ModalTypes.ChangePW)}>
            비밀번호 찾기
          </S.ForgetPWLink>
        </S.LoginBottom>
      </S.LogInContnetWrapper>
      <ModalButton buttonName={'로그인'} />
      <S.SignUpLinkWrapper>
        <span>아직 DMS 회원이 아니시라면?</span>
        <S.SignUpLink onClick={() => changeModalType(ModalTypes.SignUp)}>
          회원가입
        </S.SignUpLink>
      </S.SignUpLinkWrapper>
    </ModalWrapperContainer>
  );
};

export default LogIn;
