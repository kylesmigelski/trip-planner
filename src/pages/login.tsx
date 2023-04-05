import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import {MDBBtn} from "mdb-react-ui-kit";


export default function Login() {
    const myNav = useNavigate();

    function goHome(){
        myNav("/");
    }

    function signIn() {
        
    }


    return (
        <div className="modal">
            <form>
                <h2>Log in</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div className="button-row">
                    <MDBBtn onClick={signIn}>Submit</MDBBtn>
                    <MDBBtn onClick={goHome}>Cancel</MDBBtn>
                </div>
                <label className="blurb">Don't have an account? <a href='\signup'>Click here to create one.</a></label>
                
            </form>
        </div>
    )
}