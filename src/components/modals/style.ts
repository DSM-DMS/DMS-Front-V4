import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';
import ModalCloseImg from '../assets/icon/cross-mark.png';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28.75rem;
  height: 34.44rem;
  border-radius: 1.455rem;
  box-shadow: 0 0.1875rem 0.625rem 0 rgba(0, 0, 0, 0.15);
  background: #fff;
  z-index: 1000;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalNameWrapper = styled.div`
  display: flex;
  width: 24.56rem;
  height: 4.063rem;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ModalName = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const ModalClosebtn = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

export const BugIcon = styled.img`
  width: 1.5rem;
  height: 1.563rem;
  margin-right: 1rem;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  width: 24.75rem;
  flex-direction: column;
  justify-content: space-between;
`;
export const LogInContnetWrapper = styled(ModalContentWrapper)`
  height: 11rem;
`;

export const SignInContentWrapper = styled(ModalContentWrapper)`
  height: 16.5rem;
`;
export const FindPWContentWrapper = styled(ModalContentWrapper)`
  margin-bottom: 5rem;
  height: 12.38rem;
`;

export const ModalInput = styled.input`
  height: 3.125rem;
  border-radius: 0.9375rem;
  background-color: #fff;
  border: 0.0625rem solid #bbbbbb;
  line-height: normal;
  padding-left: 1.125rem;
  font-size: 1rem;
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

export const ModalSubmitBtn = styled.button`
  width: 14.69rem;
  height: 2.625rem;
  background-color: ${globalColor};
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.1875rem 0.62rem 0 rgba(0, 0, 0, 0.27);
  font-size: 0.9375rem;
  color: #fff;
  cursor: pointer;
  margin-bottom: 2.063rem;
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

export const BugreportInput = styled.textarea`
  resize: none;
  width: 23rem;
  height: 19.94rem;
  -webkit-appearance: none;
  border: 0.0625rem solid #bbbbb;
  border-radius: 0.9375rem;
  font-family: inherit;
  font-size: inherit;
  padding-top: 1.5rem;
  padding-left: 1.438rem;
`;
