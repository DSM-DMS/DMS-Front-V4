import * as React from 'react';

import * as S from './style';
import * as apiTypes from '../../../util/apiTypes';
import { ModalInput, ModalWrapper, ModalButton } from '../../';
import { ModalWrapperContainer } from '../../../containers';

interface Props {
  handleSignUp: (signUpParams: apiTypes.signUpParamType) => void;
}

const SignUp: React.FC<Props> = ({ handleSignUp }) => {
  const [signUpInput, setSignUpInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { verifyCode: '', id: '', password: '', checkPassword: '' },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newValue = e.target.value;
    console.log(e.target.value, e.target.name);
    setSignUpInput({ [name]: newValue });
  };

  const confiirmPassword = () => {
    if (signUpInput.password === SignUpInput.checkPassword) {
      handleSignUp({ id: signUpInput.id, password: signUpInput.password });
    } else {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <ModalWrapperContainer modalName="회원가입">
      <S.SignUpContentWrapper>
        <S.VerifyCodeInputWrapper>
          <S.VerifyCodeInput
            placeholder="확인코드 입력"
            name="verifyCode"
            value={signUpInput.verifyCode}
            onChange={handleChange}
          />
          <S.VerifyCodeButton
            onClick={() => console.log(signUpInput.verifyCode)}
          >
            인증
          </S.VerifyCodeButton>
        </S.VerifyCodeInputWrapper>
        <ModalInput
          placeholder="아이디"
          inputType="id"
          inputName="id"
          value={signUpInput.id}
          changeEvent={handleChange}
        />
        <ModalInput
          placeholder="비밀번호"
          inputName="password"
          inputType="password"
          value={signUpInput.password}
          changeEvent={handleChange}
        />
        <ModalInput
          placeholder="비밀번호 확인"
          inputName="checkPassword"
          inputType="password"
          value={signUpInput.checkPassword}
          changeEvent={handleChange}
        />
      </S.SignUpContentWrapper>
      <ModalButton buttonName="회원가입" clickEvent={confiirmPassword} />
    </ModalWrapperContainer>
  );
};

export default SignUp;
