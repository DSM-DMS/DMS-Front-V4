import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, ContentWrapper, MainWrapper } from './GlobalStyle';
import {
  ChattingContainer,
  SideBarContainer,
  HeaderContainer,
  ModalContainer,
} from './containers';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainWrapper>
        <SideBarContainer />
        <ChattingContainer />
        <ContentWrapper>
          <HeaderContainer />
          <ModalContainer />
          <Routing />
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
