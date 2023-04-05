import React from 'react';
import './App.css';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Login from './pages/login';
import Navbar from './components/navbar';
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

       </Routes>
    </>
  );
}

export default App;
