import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from './Login';

import { CookieProvider } from '../../context/cookieContext';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

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

test('Submits Form', () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<Login onSubmit={onSubmit}/>);
  fireEvent.click(getByText(/Login/i));
  expect(onSubmit).toHaveBeenCalled();
})


// test('Rendering the Test API with Console logs', () => {
//   const renderResult = render(<Login />);
//     // console.log(renderResult.container)
// });
