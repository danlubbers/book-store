import React, {useState, useContext} from "react";
import "./App.scss";
import axios from 'axios';
import { CookieProvider, CookieContext } from "./context/cookieContext";
import { getSessionCookie, destroySessionCookie } from './utils/Cookies.util'; 
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { BooksProvider } from "./context/booksContext";

function App({history}) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInMessage] = useState(`You are already logged in!  
    Click on a link in the header to navigate to a page.
  `);
  const [errorMessage] = useState(`Username or Password is incorrect!`);
  const [hasError, setHasError] = useState(false);

  const [, setUUID] = useContext(CookieContext);

  /**
 * @param {object} e - the event
 */

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

      res.data.uuid && setUUID(res.data.uuid);
      history.push('/cookie/bookshelf');
  
    } catch(err) {
      setHasError(true);
      setPassword('')
      console.error(err.message)
      
    }
  }

  const handleLogout = () => {
    destroySessionCookie();
    // update the page so the cookie actually goes away and the user no longer has access to protected routes
    window.location.reload(true); 
  }

  return (
    <CookieProvider>
        <BooksProvider>
          <div className="App">
            <Header />
            <Login 
              onSubmit={handleSubmit}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              loggedInMessage={loggedInMessage}
              errorMessage={errorMessage}
              hasError={hasError}
              getSessionCookie={getSessionCookie}
              onLogout={handleLogout}
            />
          </div>
        </BooksProvider>
    </CookieProvider>
  );
}

export default App;
