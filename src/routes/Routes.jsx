import React from 'react';
import App from '../App';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../context/cookieContext';

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </CookieProvider>
  )
} 