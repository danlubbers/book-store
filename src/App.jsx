import React from "react";
import "./App.scss";
import { CookieProvider } from "./context/cookieContext";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App({history}) {
  return (
    <CookieProvider>
        <div className="App">
          <Header />
          <Login history={history}/>
        </div>
    </CookieProvider>
  );
}

export default App;
