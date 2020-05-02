import React, {useState, useContext} from 'react';
import {FormGroup, FormControl, FormLabel, Alert} from 'react-bootstrap';
import { CookieContext } from '../../context/cookieContext';
import axios from 'axios';

function Login(props) {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState(null);
const [hasError, setHasError] = useState(false);

const [, setUUID] = useContext(CookieContext)

const handleSubmit = async e => {
  e.preventDefault();

  try {
    let res = await axios.post(`http://localhost:7000/signin/uuid`,
      {
        username,
        password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    console.log('uuid ', res.data.uuid)
    res.data.uuid && setUUID(res.data.uuid)
    props.history.push('/cookie/bookshelf')
    

  } catch(err) {
    setHasError(true);
    setErrorMessage('Username or Password is incorrect!');
    console.error(err.message)
  }
}

  return (
      <form className='formContainer' onSubmit={handleSubmit}>

        <FormGroup className="mb-3 formGroup" controlId='formBasicEmail' >
          <FormLabel className='formLabel'>Username</FormLabel>
          <FormControl className='inputText' type="text" placeholder='Username' aria-label="Username" name='username' value={username} onChange={e => setUsername(e.target.value)}/> 
        </FormGroup>

        <FormGroup className="mb-3 formGroup">
          <FormLabel className='formLabel'>Password</FormLabel>
          <FormControl className='inputText' type="password" placeholder='Password' aria-label="Password" name='password' value={password} onChange={e => setPassword(e.target.value)}/> 
        </FormGroup>

      {hasError && 
        <h5 className='loginError'>
          <Alert variant={'danger'} size='sm'>{errorMessage}</Alert>
        </h5>
      }

        <button type='submit' className='btn btn-secondary'>Login</button>
      </form>
  )
}

export default Login;