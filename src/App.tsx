import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, ContentWrapper, MainWrapper } from './GlobalStyle';
import {
  NavigationContainer,
  SideBarContainer,
  HeaderContainer,
} from './containers';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainWrapper>
        <SideBarContainer />
        <ContentWrapper>
          <HeaderContainer />
          <Routing />
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
