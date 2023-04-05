import React from 'react';
import './App.css';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Login from './pages/login';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import  app  from "./firebase.js";
import { Routes, Route } from 'react-router-dom';

function App() {




  return (
    <>
       <Navbar />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

       </Routes>
    </>
  );
}

export default App;
