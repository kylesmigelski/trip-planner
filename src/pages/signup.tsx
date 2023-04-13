import React, {useState,useRef} from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { initializeApp } from "@firebase/app";
import {getFirestore, Firestore} from "@firebase/firestore";
import { getAnalytics } from "@firebase/analytics";
import { getAuth, signOut, createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from 'firebase/auth';
import app from "../firebase.js"


export default function Signup() {
    const myNav = useNavigate();
    const inputRef = useRef(null);


    const auth = getAuth(app);

    function goHome(){
        myNav("/");
    }

    function createAccount() {
        //Add account to firebase
        //const [newEmail, setUpdated] = useState('Email address');
        //const newPassword = ""

        //createUserWithEmailAndPassword(auth, newEmail, newPassword)
            //.then((cred:UserCredential)=>{
           // console.log("Account created");

            //auth.signOut()
           // .catch((err: any) => {
           // console.error("Oops", err);});
           // })

        //Send user to login page
        goToLogin()
        
    }

    function goToLogin() {
        myNav('/login')
    }
    


return (
        <div
            className="p-5 text-center bg-image d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb9a8f119710403.60a39c2b62710.jpg)`,
                minHeight: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Create your account</h2><br></br>
                                <p className="text-white-50 mb-5">Please choose an email and password:</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />
                            
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={createAccount}>
                                    Create Account
                                </MDBBtn>
                                <div className='d-flex flex-row mt-3 mb-5'></div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}