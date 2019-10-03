import styled from 'styled-components';

export const MypagePeopleWrapper = styled.div`
  height: 6.3125rem;
  display: flex;
  position: relative;
`

export const MypagePeopleImg = styled.img`
  width: 6.3125rem;
  height: auto;
`

export const MypagePeopleData = styled.div`
  display: inline-flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3.75rem;
`

export const MypagePeopleName = styled.span`
  font-size: 2.375rem;
  font-weight: 600;
  color: #59545d;
`

export const MypagePeoplestudentNumber = styled.span`
  font-size: 1.3125rem;
  opacity: .51;
  color: #59545d;
`

export const MypagePeopleButtonList = styled.p`
  display: flex; 
  position: absolute;
  right: 0;
  bottom: 0;
`
export const MypagePeopleButton = styled.button`
  display:flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  color: #59545d;
  margin-left: 2.5625rem;
  opacity: 0.42;

  &:hover {
    opacity: 1;
 }
`

export const MypagePeopleButtonImg = styled.img`
  height: 1.64375rem;
  width: auto;
  margin-right: 0.9375rem;
`