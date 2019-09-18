import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';
import ModalCloseImg from '../assets/icon/cross-mark.png'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0; 
  right: 0;
  background-color: rgba(0,0,0,0.16);
`

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
`

export const ModalNameWrapper = styled.div`
  display: flex;
  width: 24.56rem;
  height:4.063rem;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`

export const ModalName = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
`

export const ModalClosebtn = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  
`
export const ModalContentWrapper = styled.div`
  display : flex;
  width: 24.75rem;
  flex-direction: column;
  justify-content: space-between;
`
export const SignInContentWrapper = styled(ModalContentWrapper)`
  height: 16.5rem;
`

export const ModalInput = styled.input`
  height: 3.125rem;
  border-radius: 0.9375rem;  
  background-color: #fff;
  border:  0.0625rem solid #bbbbbb;
  line-height: normal;
  padding-left: 1.125rem;
  font-size: 1rem;
` 

export const LoginBottom = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
`
export const AutoLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AutoLoginCheckbtn = styled.input`
  width:  2.25rem;
  height: 1.188rem;
  appearance: none;
  background-color:#DCDCDC ;
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
    margin-top: 0.125rem
    display: block;
    width: 0.8125rem;
    height: 0.8125rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);   
    transition: 0.5s;
  } 
`

export const ForgetPWLink = styled.span`
  cursor: pointer;
`

export const ModalBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.69rem;
  height: 6.563rem;
  margin-top: 3rem;
  justify-content: space-between;
`

export const button = styled.button`
  width: 14.69rem;
  height: 2.625rem;
  background-color: ${globalColor};
  border-radius: 1rem;
  border: none; 
  box-shadow: 0 0.1875rem 0.62rem 0 rgba(0, 0, 0, 0.27); 
  font-size:  0.9375rem;
  color: #fff;
  cursor: pointer;
  margin-bottom: 2.063rem;
  &:active {
    width: 14.5rem;
    height: 2.5rem;
  }
`

export const SignInLinkWrapper = styled.div`
  font-size: 0.875rem;
`

export const SignInLink = styled.span`
  font-weight: bold;
  cursor: pointer;
`