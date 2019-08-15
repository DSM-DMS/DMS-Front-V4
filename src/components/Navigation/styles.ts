import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  right: ${props => (props.isOpen ? '3.1875rem' : '-28.95875rem')};
  bottom: 2.375rem;
  transition: 0.7s;
  z-index: 800;
  align-items: flex-end;
  justify-content: space-between;
  width: 37.15625rem;
`;

export const NavigationButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationButton = styled.button`
  display: flex;
  width: 5rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  margin-top: 1.625rem;
  background-color: ${props => props.backColor};
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.49);
`;

export const NavigationButtonImg = styled.img`
  width: 2.83125rem;
  height: 2.83125rem;
`;

export const MypageOrChatting = styled.div`
  display: inline-block;
  width: 28.09375rem;
  height: 41.6875rem;
  border-radius: 1.875rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.21);
  overflow: hidden;
`;

export const MypageOrChattingCloseBtn = styled.img`
  position: absolute;
  top: 2.21875rem;
  right: 1.70625rem;
  width: 1.2875rem;
  height: 1.2875rem;
  cursor: pointer;
`;
