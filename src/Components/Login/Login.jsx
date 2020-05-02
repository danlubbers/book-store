import React from 'react';
import {FormGroup, FormControl, FormLabel, Alert} from 'react-bootstrap';

function Login(props) {

  return (
      <form onSubmit={props.onSubmit}>

        <FormGroup className="mb-3 formGroup" controlId='formBasicEmail' >
          <FormLabel className='formLabel'>Username</FormLabel>
          <FormControl className='inputText' type="text" placeholder='Username' aria-label="Username" name='username' value={props.username} onChange={e => props.setUsername(e.target.value)}/> 
        </FormGroup>

        <FormGroup className="mb-3 formGroup">
          <FormLabel className='formLabel'>Password</FormLabel>
          <FormControl className='inputText' type="password" placeholder='Password' aria-label="Password" name='password' value={props.password} onChange={e => props.setPassword(e.target.value)}/> 
        </FormGroup>

      {props.hasError && 
        <h5 className='loginError'>
          <Alert variant={'danger'} size='sm'>{props.errorMessage}</Alert>
        </h5>
      }
    
       <button type='submit' className='btn btn-secondary'>Login</button>
     
      </form>
  )
}

export default Login;