import React from 'react';
import './App.css';
import Background from './airplane.jpg';
import  app  from "./firebase.js";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function App() {

  function Login() {
    
  }

  function Signup() {
    
  }
    
  

  return (
    <div style={{  
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      backgroundRepeat: 'no-repeat' 
    }}>
      <header className='App-header'>Welcome to Trip Planner</header>
      <p className='App-text'>Let's plan your dream vacation!
        <br></br><button className='button' onClick={Login}>Login</button>
        <br></br><button className='button' onClick={Signup}>Register</button>
      </p>
      
    </div>
  );
}

export default App;
