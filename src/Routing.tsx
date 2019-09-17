import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NoticeContainer } from './containers';

interface RoutingProps {}

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={() => <div>1</div>} exact />
      <Route path="/notice" component={NoticeContainer} exact />
    </>
  );
};

export default Routing;
