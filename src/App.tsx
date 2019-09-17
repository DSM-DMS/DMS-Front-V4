import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, ContentWrapper, MainWrapper } from './GlobalStyle';
import { NavigationContainer, SideBarContainer } from './containers';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavigationContainer />
      <MainWrapper>
        <SideBarContainer />
        <ContentWrapper>
          <Routing />
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
