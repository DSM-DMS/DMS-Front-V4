import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NoticeContainer, MypageContainer } from './containers';

interface RoutingProps {}

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={() => <div>1</div>} exact />
      <Route path="/etc/notice" component={NoticeContainer} exact />
      <Route path="/etc/mypage" component={MypageContainer} exact />
    </>
  );
};

export default Routing;
