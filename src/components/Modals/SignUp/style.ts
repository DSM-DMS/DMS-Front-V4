import styled from 'styled-components';
import { globalColor } from '../../../GlobalStyle';

export const SignUpContentWrapper = styled.div`
  display: flex;
  width: 24.75rem;
  flex-direction: column;
  justify-content: space-between;
  height: 16.5rem;
`;

export const VerifyCodeInputWrapper = styled.div`
  display: flex;
  height: 3.125rem;
  border-radius: 0.9375rem;
  padding: 0 1.125rem ;
  background-color: #fff;
  border: 0.0625rem solid #bbbbbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  &:focus {
    border-color: ${globalColor};
  }
`;

export const VerifyCodeInput = styled.input`
  width: 19rem;
  line-height: normal;
  font-size: 1rem;
  border: none;
`;

export const VerifyCodeButton = styled.button`
  width: 3.625rem;
  height: 1.813rem;
  border-radius: 0.7rem;
  border: none;
  background-color: #00be91;
  font-size: 0.5rem;
  color: #fff;
`;
