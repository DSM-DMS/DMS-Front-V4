import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  right: ${props => (props.onOpen ? '15px' : '-115px')};
  bottom: 50px;
  transition: 0.7s;
  z-index: 800;
  align-items: flex-end;
`;

export const MypageOrChatting = styled.div`
  display: inline-block;
  width: 100px;
  height: 300px;
  background-color: blue;
  margin-left: 30px;
`;
