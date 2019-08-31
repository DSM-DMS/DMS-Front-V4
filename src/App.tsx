import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { NavigationContainer, NoticeContainer, ApplyContainer } from './containers';
import configureStore from './store/configureStore';
import { HashRouter, Route } from 'react-router-dom';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <NavigationContainer />
      <ApplyContainer />
      <NoticeContainer />
    </Provider>
  );
}

export default App;
