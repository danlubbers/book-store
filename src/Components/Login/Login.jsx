import React, {useState} from 'react';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';


export default function Login() {

const [values, setValues] = useState({
  username: '', 
  password: ''
});

const handleValues = e => {
  setValues({...values, [e.target.name]: e.target.value})
}

const handleSubmit = e => {
  e.preventDefault();
  console.log(values.username)
}

  return (
      <form className='formContainer' onSubmit={handleSubmit}>

        <FormGroup className="mb-3 formGroup" controlId='formBasicEmail' >
          <FormLabel className='formLabel'>Username</FormLabel>
          <FormControl className='inputText' type="text" placeholder='Username' aria-label="Username" name='username' value={values.username} onChange={handleValues}/> 
        </FormGroup>

        <FormGroup className="mb-3 formGroup">
          <FormLabel className='formLabel'>Password</FormLabel>
          <FormControl className='inputText' type="password" placeholder='Password' aria-label="Password" name='password' value={values.password} onChange={handleValues}/> 
        </FormGroup>
        
        <button type='submit' className='btn btn-secondary'>Login</button>
      </form>
  )
}
