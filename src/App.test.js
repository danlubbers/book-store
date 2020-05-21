import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { CookieProvider } from './context/cookieContext';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 
import { act } from 'react-dom/test-utils';

import { render } from '@testing-library/react';

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

test('Finds all text ( Home, BookShelf, Search, Login, Logout )on the page', () => {
  const { getByText } = render(
    <Router history={history}>
      <CookieProvider>
        <App />
      </CookieProvider>
    </Router>);
  expect(getByText(
              'Home', 
              'BookShelf', 
              'Search', 
              'Login', 
              'Logout'
              )).toBeInTheDocument();
});

// it('submits username and password',  () => {
//   const username = 'alex';
//   const password = 'grey';
//   const onSubmit = jest.fn();
//   const wrapper = mount(
//     <Router history={history}>
//       <CookieProvider>
//         <App onSubmit={onSubmit}/>
//       </CookieProvider>
//     </Router>
//   )

//   act(() => {
//     wrapper
//       .find({'aria-label': 'Username'}).at(0)
//       .props().onChange({Username: {target: {value: username}}});

//     // wrapper
//     //   .find({'aria-label': 'Password'}).at(1)
//     //   .props().onChange({Password: {target: {value: 'password'}}});

//       wrapper.update();
//       wrapper.find({ 'aria-label': 'login-form' }).props().onSubmit({
//         preventDefault: () => {}
//       });

//       expect(onSubmit).toHaveBeenCalledTimes(1);
//       expect(onSubmit).toHaveBeenCalledWith({
//         username,
//         // password
//       });
//   })
// })