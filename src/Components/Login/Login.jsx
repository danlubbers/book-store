import React from 'react';
import {FormGroup, FormControl, FormLabel, Alert} from 'react-bootstrap';
import Proptypes from 'prop-types';

function Login(props) {

  return (
      <form onSubmit={props.onSubmit}>

        <FormGroup className="mb-3 formGroup" controlId='formBasicEmail' >
          <FormLabel className='formLabel'>Username</FormLabel>
          <FormControl className='inputText' type="text" placeholder='Username' aria-label="Username" name='username' value={props.username} onChange={e => props.setUsername(e.target.value)} disabled={!!props.getSessionCookie()}/> 
        </FormGroup>

        <FormGroup className="mb-3 formGroup">
          <FormLabel className='formLabel'>Password</FormLabel>
          <FormControl className='inputText' type="password" placeholder='Password' aria-label="Password" name='password' value={props.password} onChange={e => props.setPassword(e.target.value)} disabled={!!props.getSessionCookie()}/> 
        </FormGroup>

      {!!props.getSessionCookie() && 
        <h5 className='loginError'>
          <Alert variant={'success'} size='sm'>{props.loggedInMessage}</Alert>
        </h5>
      }  

      {props.hasError && 
        <h5 className='loginError'>
          <Alert variant={'danger'} size='sm'>{props.errorMessage}</Alert>
        </h5>
      }

      <span>
        <button type='submit' className='btn btn-secondary' disabled={!!props.getSessionCookie()}>Login</button>
        <button type='text' className='btn btn-secondary' disabled={!props.getSessionCookie()} onClick={props.onLogout}>Logout</button>
      </span>
     
      </form>
  )
}

export default Login;

Login.propTypes = {
  onSubmit: Proptypes.func.isRequired, 
  username: Proptypes.string.isRequired, 
  setUsername: Proptypes.func.isRequired, 
  password: Proptypes.string.isRequired, 
  setPassword: Proptypes.func.isRequired, 
  loggedInMessage: Proptypes.string, 
  errorMessage: Proptypes.string, 
  hasError: Proptypes.bool,
  getSessionCookie: Proptypes.func.isRequired, 
  onLogout: Proptypes.func.isRequired, 
}