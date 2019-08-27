import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { NavigationContainer, NoticeContainer } from './containers';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <NavigationContainer />
      <NoticeContainer />
    </Provider>
  );
}

export default App;
