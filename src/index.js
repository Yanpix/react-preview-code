import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import FakeDataService from './services/fakedata-service';
import { FakeDataServiceProvider } from './components/fakedatastore-service-context';

import store from './store';

const fakeDataService = new FakeDataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FakeDataServiceProvider value={fakeDataService}>
        <Router>
          <App />
        </Router>
      </FakeDataServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('app-root')
);