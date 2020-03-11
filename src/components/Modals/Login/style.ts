import styled from 'styled-components';
import { globalColor } from '../../../GlobalStyle';

export const LogInContnetWrapper = styled.div`
  display: flex;
  width: 24.75rem;
  flex-direction: column;
  justify-content: space-between;
  height: 11rem;
`;

export const LoginBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AutoLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AutoLoginCheckbtn = styled.input`
  display: flex
  width: 2.25rem;
  height: 1.188rem;
  margin-right: 0.4375rem;
  appearance: none;
  align-items: center;
  background-color:#DCDCDC;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
  border-radius: 1rem;
  cursor: pointer;
  &:checked{
    background-color: ${globalColor} ;
    &::after{
      margin-left:1.25rem;
    } 
  }
  &::after{
    content: "";  
    margin-left: 0.1875rem;
    display: block;
    width: 0.8125rem;
    height: 0.8125rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);   
    transition: 0.5s;
  } 
`;

export const ForgetPWLink = styled.span`
  cursor: pointer;
`;

export const SignInLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem
  border-radius: 0 0 1.455rem 1.455rem;
  font-size: 0.875rem;
  background-color: #eeefe7;  
  justify-content: center;
  align-items: center;
`;

export const SignInLink = styled.span`
  margin-left: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;
