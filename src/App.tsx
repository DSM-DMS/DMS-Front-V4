import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { NavigationContainer, NoticeContainer } from './containers';

const Test = styled.div`
  background: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationContainer />
      <Test>test</Test>
      <NoticeContainer />
    </>
  );
}

export default App;
