import React, { useContext } from 'react';
import { CookieContext } from '../context/cookieContext';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoutes = ({
  component: Component, 
  ...rest
}) => {

  const [uuid] = useContext(CookieContext);
  console.log('Protected', uuid)
  return (
    <Route 
      {...rest}
      render={propsFromReactRouter => {
        return uuid ? (
          <Component {...propsFromReactRouter} />
        ) : (
          <Redirect 
          to='/' 
          {...propsFromReactRouter} 
          {...rest}
          />
        )
      }}
    />
  )
}