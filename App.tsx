import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './src/store';

import GlobalStyle from './src/styles/global';
import CurrentlyRoutes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentlyRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;