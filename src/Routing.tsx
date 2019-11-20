import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NoticeContainer, MypageContainer, ApplyStayContainer, ApplyExtensionContainer, ApplyGoingOutContainer, ApplyMorningMusicContainer } from './containers';

interface RoutingProps {}

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={() => <div>1</div>} exact />
      <Route path="/etc/notice" component={NoticeContainer} exact />
      <Route path="/etc/mypage" component={MypageContainer} exact />
      <Route path="/apply/stay" component={ApplyStayContainer} exact />
      <Route path="/apply/extension" component={ApplyExtensionContainer} exact />
      <Route path="/apply/goingout" component={ApplyGoingOutContainer} exact />
      <Route path="/apply/music" component={ApplyMorningMusicContainer} exact />
    </>
  );
};

export default Routing;
