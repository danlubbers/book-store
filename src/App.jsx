import React from "react";
import "./App.scss";
import { CookieProvider } from "./context/cookieContext";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <CookieProvider>
        <div className="App">
          <Header />
          <Login />
        </div>
    </CookieProvider>
  );
}

export default App;
