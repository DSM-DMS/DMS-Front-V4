import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, ContentWrapper, MainWrapper } from './GlobalStyle';
import {
  NavigationContainer,
  NoticeContainer,
  FooterContainer,
  HeaderContainer,
} from './containers';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavigationContainer />
      <MainWrapper>
        <HeaderContainer />
        <ContentWrapper>
          <Route path="/" component={() => <div>1</div>} exact />
          <Route path="/notice" component={NoticeContainer} exact />
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
