import React, {useState,useRef, ChangeEvent} from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { getAuth,signInWithPopup, signInWithEmailAndPassword, UserCredential, GoogleAuthProvider } from '@firebase/auth';
import app from "../firebase.js"
export let signedIn = false;
export let yourEmail = "";


export default function Login() {
    const myNav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function updateEmail(event: ChangeEvent<HTMLInputElement>): void{
        setEmail(event.target.value)
    }

    function updatePassword(ev: ChangeEvent<HTMLInputElement>){
        setPassword(ev.target.value)
    }

    yourEmail = email;

    function goHome(){
        myNav("/");
    }

    const auth = getAuth(app);

    function signIn() {
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Signed in.");
                signedIn = true;
                goHome();
            })
            .catch((error) => {
                console.log("Error while signing in.");
            });
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

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={updateEmail} value={email}/>
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={updatePassword} value={password}/>

                                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={signIn}>
                                    Login
                                </MDBBtn>
                                <div className='d-flex flex-row mt-3 mb-5'></div>
                                <div>
                                    <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}