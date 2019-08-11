import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const Test = styled.div`
  background: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Test>test</Test>
    </>
  );
}

export default App;
