import React from "react";
import "./App.scss";
import { StateProvider } from './context/stateContext'; 
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Header />
        <Login />
      </div>
    </StateProvider>
  );
}

export default App;
