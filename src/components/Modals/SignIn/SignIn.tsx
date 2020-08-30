import * as React from 'react';

import * as S from './style';
import * as apiTypes from '../../../util/apiTypes';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';

interface Props {
  handleSignIn: (signInParams: apiTypes.signUpParamType) => void;
}

const SignIn: React.FC<Props> = ({ handleSignIn }) => {
  const [signInInput, setSignInInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { verifyCode: '', id: '', password: '', checkPassword: '' },
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setSignInInput({ [name]: newValue });
  };

  return (
    <ModalWrapperContainer modalName="회원가입">
      <S.SignInContentWrapper>
        <S.VerifyCodeInputWrapper>
          <S.VerifyCodeInput
            placeholder="확인코드 입력"
            name="checkCode"
            value={signInInput.checkCode}
            onChange={handleChange}
          />
          <S.VerifyCodeButton
            onClick={() => console.log(signInInput.verifyCode)}
          >
            인증
          </S.VerifyCodeButton>
        </S.VerifyCodeInputWrapper>
        <ModalInput placeholder="아이디" value={signInInput.id} />
        <ModalInput
          placeholder="비밀번호"
          inputType="password"
          value={signInInput.password}
        />
        <ModalInput
          placeholder="비밀번호 확인"
          inputType="password"
          value={signInInput.checkPassword}
        />
      </S.SignInContentWrapper>
      <ModalButton
        buttonName="회원가입"
        // onClick={() => handleSignIn({ })}
      />
    </ModalWrapperContainer>
  );
};

export default SignIn;
