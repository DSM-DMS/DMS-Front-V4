import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, ContentWrapper, MainWrapper } from './GlobalStyle';
import {
  NavigationContainer,
  FooterContainer,
  HeaderContainer,
} from './containers';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavigationContainer />
      <MainWrapper>
        <HeaderContainer />
        <ContentWrapper>
          <Routing />
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
