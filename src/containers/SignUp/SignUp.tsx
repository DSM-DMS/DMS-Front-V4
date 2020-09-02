import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as apiTypes from '../../util/apiTypes';
import { StoreState } from '../../modules/index';
import { SignUp } from '../../components';

interface Props {}

const SignUpContainer: React.FC<Props> = () => {
  const signUpStatus = useSelector(
    (state: StoreState) => state.signUp.signUpStatus,
  );
  useEffect(() => {
    console.log(signUpStatus);
  }, [signUpStatus]);

  const handleVerifyCode = (verifyCode: string) => {
    console.log(verifyCode);
  };

  const handleSignUp = (signUpParams: apiTypes.authParamType) => {
    console.log('signUpParam', signUpParams);

    console.log(signUpStatus);
  };

  return (
    <div>
      <SignUp handleSignUp={handleSignUp} handleVerifyCode={handleVerifyCode} />
    </div>
  );
};

export default SignUpContainer;
