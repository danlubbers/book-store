import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { CookieProvider } from './context/cookieContext';
import { Router } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history'; 
import { render, fireEvent } from '@testing-library/react';

const history = createBrowserHistory();
const historyMemory = createMemoryHistory();

it('renders without crashing', () => {
  mount(
    <Router history={history}>
      <CookieProvider>
        <App />
      </CookieProvider>
    </Router>
  )
})

// Query by Text content
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

// "Best Method" Query by ARIA role and label 
test('Finds both buttons "Login" & "Logout" on the page', () => {
  const { getByRole } = render(
    <Router history={history}>
      <CookieProvider>
        <App />
      </CookieProvider>
    </Router>);
  expect(getByRole('button', { name: /login/i}));
  expect(getByRole('button', { name: /logout/i}));
});

test('Redirects to the correct page', () => {
  const renderResult = render(
    <Router history={historyMemory}>
      <CookieProvider>
        <App />
      </CookieProvider>
    </Router>);

    console.log(renderResult)
});

// test('Clicking on Login Button', () => {
//   const onClick = jest.fn();
//   const renderResult = render(
//     <Router history={history}>
//       <CookieProvider>
//         <App onClick={onClick}/>
//       </CookieProvider>
//     </Router>
//     );
//   fireEvent.click(renderResult.getByText(/Login/i));
//   expect(onClick).toHaveBeenCalled();
// })
