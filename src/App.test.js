import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { CookieProvider } from './context/cookieContext';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 

const history = createBrowserHistory();

it('renders without crashing', () => {
  mount(
    <Router history={history}>
      <CookieProvider>
        <App />
      </CookieProvider>
    </Router>
  )
})