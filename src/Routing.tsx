import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  NoticeContainer,
  MypageContainer,
  ApplyStayContainer,
  ApplyExtensionContainer,
  ApplyGoingoutContainer,
  MainContainer,
} from './containers';

interface RoutingProps {}

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={MainContainer} exact />
      <Route path="/etc/notice" component={NoticeContainer} exact />
      <Route path="/etc/mypage" component={MypageContainer} exact />
      <Route path="/apply/stay" component={ApplyStayContainer} exact />
      <Route
        path="/apply/extension"
        component={ApplyExtensionContainer}
        exact
      />
      <Route
        path="/apply/goingout"
        component={ApplyGoingoutContainer}
        exact
      />
    </>
  );
};

export default Routing;
