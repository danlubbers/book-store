import React, {useState, useContext} from "react";
import "./App.scss";
import axios from 'axios';
import { CookieProvider, CookieContext } from "./context/cookieContext";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App({history}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasError, setHasError] = useState(false);

  const [uuid, setUUID] = useContext(CookieContext);

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
  
      console.log('uuid ', uuid);
      res.data.uuid && setUUID(res.data.uuid);
      history.push('/cookie/bookshelf')
      
  
    } catch(err) {
      setHasError(true);
      setErrorMessage('Username or Password is incorrect!');
      console.error(err.message)
    }
  }
  return (
    <CookieProvider>
        <div className="App">
          <Header />
          <Login 
            onSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            hasError={hasError}
            />
        </div>
    </CookieProvider>
  );
}

export default App;
