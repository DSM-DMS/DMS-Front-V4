import * as React from 'react';

import * as S from './style';
import * as apiType from '../../../util/api/apiTypes';
import { ModalButton, ModalInput } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';
import { ModalTypes } from '../../../modules/modal';

interface Props {
  changeModalType: (modalType: ModalTypes) => void;
  handleLogin: (
    loginParams: apiType.authParamType,
    isAutoLogin: string,
  ) => void;
}

const LogIn: React.StatelessComponent<Props> = ({
  changeModalType,
  handleLogin,
}) => {
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

  const handleToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    setLoginInput({ isAutoLogin: e.currentTarget.checked });
  };

  const checkInput = () => {
    if (loginInput.id.length > 0 && loginInput.password.length > 0) {
      handleLogin(
        { id: loginInput.id, password: loginInput.password },
        loginInput.isAutoLogin,
      );
    } else {
      alert('공백이 있는지 확인해주세요');
    }
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
            <S.AutoLoginCheckbtn type="checkbox" onClick={handleToggle} />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink onClick={() => changeModalType(ModalTypes.ChangePW)}>
            비밀번호 찾기
          </S.ForgetPWLink>
        </S.LoginBottom>
      </S.LogInContnetWrapper>
      <ModalButton buttonName="로그인" clickEvent={checkInput} />
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
