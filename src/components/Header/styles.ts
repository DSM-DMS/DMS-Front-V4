import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 5.8125rem;
  padding: 0 7.8125rem;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.63125rem;
`;

export const HeaderLeftFont = styled.span`
  font-size: 1.25rem;
`;

export const HeaderRightButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const HeaderRightButtonImg = styled.img`
  height: 1.875rem;
  width: auto;
`;
