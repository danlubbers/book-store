import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from './Login';

// Using react dom testing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div)
})

// Using Enzyme's shallow render
it('Enzyme renders without crashing', () => {
  shallow(<Login />)
})
