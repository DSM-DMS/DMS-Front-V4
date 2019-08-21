import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { NavigationContainer } from './containers';
import { HeaderContainer } from './containers'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationContainer />
      <HeaderContainer />
    </>
  );
}

export default App;
