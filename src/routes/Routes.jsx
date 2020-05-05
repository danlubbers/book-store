import React from 'react';
import App from '../App';
import Bookshelf from '../Components/Bookshelf/Bookshelf';
import BookDetails from '../Components/BookDetails/BookDetails';
import Search from '../Components/Search/Search';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../context/cookieContext';
import { ProtectedRoutes } from '../routes/ProtectedRoutes';
import { BookProvider } from '../context/bookContext';

export const Routes = () => {
  return (
    <CookieProvider>
      <BookProvider>
      <Switch>
        <Route exact path='/' component={App} />
        <ProtectedRoutes exact path='/cookie/bookshelf' component={Bookshelf} />
        <ProtectedRoutes exact path='/cookie/book/:slug' component={BookDetails} />
        <ProtectedRoutes exact path='/cookie/search' component={Search} />
      </Switch>
      </BookProvider>
    </CookieProvider>
  )
} 