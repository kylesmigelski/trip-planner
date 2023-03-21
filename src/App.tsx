import React from 'react';
import './App.css';
import Background from './airplane.jpg';


function App() {
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
        <br></br><button className='button'>Get Started</button>
      </p>
      
    </div>
  );
}

export default App;
