import React from 'react';
import './App.css';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Login from './pages/login';
import Trips from './pages/trips';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import Logout from './pages/logout';
import { Routes, Route } from 'react-router-dom';
import {AuthProvider} from "./AuthContext";

function App() {

  return (
    <>
        <AuthProvider>
       <Navbar />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/logout" element={<Logout />} />
            

       </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
