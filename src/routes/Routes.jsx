import React from 'react';
import App from '../App';
import Bookshelf from '../Components/Bookshelf/Bookshelf';
import BookDetails from '../Components/BookDetails/BookDetails';
import Search from '../Components/Search/Search';
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../context/cookieContext';
import { ProtectedRoutes } from '../routes/ProtectedRoutes';
import { BooksProvider } from '../context/booksContext';

export const Routes = () => {
  return (
    <CookieProvider>
      <BooksProvider>
        <Switch>
          <Route exact path='/' component={App} />
          <ProtectedRoutes exact path='/cookie/bookshelf' component={Bookshelf} />
          <ProtectedRoutes exact path='/cookie/book/:slug' component={BookDetails} />
          <ProtectedRoutes exact path='/cookie/search' component={Search} />
          <Route component={PageNotFound} />
        </Switch>
      </BooksProvider>
    </CookieProvider>
  )
} 