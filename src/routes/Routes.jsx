import React from 'react';
import App from '../App';
import Bookshelf from '../Components/Bookshelf/Bookshelf';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../context/cookieContext';
import { ProtectedRoutes } from '../routes/ProtectedRoutes';

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        <Route exact path='/' component={App} />
        <ProtectedRoutes exact path='/cookie/bookshelf' component={Bookshelf} />
      </Switch>
    </CookieProvider>
  )
} 