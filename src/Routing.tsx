import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NoticeContainer, ApplyStayContainer, ApplyExtensionContainer } from './containers';

interface RoutingProps {}

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={() => <div>1</div>} exact />
      <Route path="/etc/notice" component={NoticeContainer} exact />
      <Route path="/apply/stay" component={ApplyStayContainer} exact />
      <Route path="/apply/extension" component={ApplyExtensionContainer} />
    </>
  );
};

export default Routing;
