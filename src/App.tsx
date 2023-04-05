import React from 'react';
import './App.css';
import Navbar from './navbar';
import Background from './airplane.jpg';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
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
      <>
          <Navbar/>
          <div
              className='p-5 text-center bg-image'
              style={{ backgroundImage: `url(${Background})`, height: '100vh' }}
          >
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                  <div className='d-flex justify-content-center h-100'>
                      <div className='text-white'>
                          <h1 className='App-header'>Welcome to Trip Planner!</h1>
                          <h4 className='mb-14' style={{ fontFamily: 'Gill Sans' }}>Lets plan your dream vacation.</h4>
                          <MDBBtn className='big-button' color={'secondary'} size={'lg'}>
                              Get started
                          </MDBBtn>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
