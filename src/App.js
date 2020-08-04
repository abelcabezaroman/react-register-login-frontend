import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <RegisterPage/>
          <LoginPage/>
      </div>
    </div>
  );
}

export default App;
