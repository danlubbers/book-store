import React, {useContext} from 'react';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { StateContext } from '../../context/stateContext'; 

export default function Login() {

const [state, setState] = useContext(StateContext);

const handleValues = e => {
  setState({...state, [e.target.name]: e.target.value})
}

const handleSubmit = e => {
  e.preventDefault();
  console.log(state)
}

  return (
      <form className='formContainer' onSubmit={handleSubmit}>

        <FormGroup className="mb-3 formGroup" controlId='formBasicEmail' >
          <FormLabel className='formLabel'>Username</FormLabel>
          <FormControl className='inputText' type="text" placeholder='Username' aria-label="Username" name='username' value={state.username} onChange={handleValues}/> 
        </FormGroup>

        <FormGroup className="mb-3 formGroup">
          <FormLabel className='formLabel'>Password</FormLabel>
          <FormControl className='inputText' type="password" placeholder='Password' aria-label="Password" name='password' value={state.password} onChange={handleValues}/> 
        </FormGroup>

        <button type='submit' className='btn btn-secondary'>Login</button>
      </form>
  )
}
