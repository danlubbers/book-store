import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Login from './Login';
// import { Router } from 'react-router-dom';
// import { CookieProvider } from '../../context/cookieContext';
import { createBrowserHistory } from 'history'; 

// const history = createBrowserHistory();

// Using react dom testing - This test takes 21ms whereas Emzyme takes 2ms.
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Login />, div)
// })

// Using Enzyme's shallow render
it('Enzyme renders without crashing', () => {
  shallow(<Login />)
});

it('should render one <form>', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('form')).toHaveLength(1);
});

it('should render one two input fields', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('FormControl')).toHaveLength(2);
});

it('should render one two buttons', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('button')).toHaveLength(2);
});

// it('submits username and password',  () => {
//   const username = 'alex';
//   const password = 'grey';
//   const onSubmit = jest.fn();
//   const wrapper = mount(
//     <Router history={history}>
//       <CookieProvider>
//         <Login onSubmit={onSubmit}/>
//       </CookieProvider>
//     </Router>
//   )

//   wrapper
//     .find({'data-testid': 'Username'}).at(0)
//     .simulate('change', {target: {value: username}});

//   wrapper
//     .find({'data-testid': 'Password'}).at(1)
//     .simulate('change', {target: {value: password}});

//     wrapper.update();
//     wrapper.find({ 'data-testid': 'login-form' }).simulate('submit', {
//       preventDefault: () => {}
//     });

//     expect(onSubmit).toHaveBeenCalledTimes(1);
//     expect(onSubmit).toHaveBeenCalledWith({
//       username,
//       password
//     });
// })