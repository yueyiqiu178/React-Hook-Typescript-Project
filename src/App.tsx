import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/MyButton';
import { useState, createContext, useContext } from "react";

const UserContext = createContext<string>("");

const App = ()=>{

  const [user, setUser] = useState<string>("Jesse Hall");
  
  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <header className="App-header">
        {user}
      <Button title={user} disabled={true}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
