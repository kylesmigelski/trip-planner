import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const myNav = useNavigate();

    function goHome(){
        myNav("/");
    }

    function createAccount() {
        
    }


    return (
        <div className="modal">
            <form>
                <h2>Create your Account</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div className="button-row">
                    <button onClick={createAccount}>Submit</button>
                    <button onClick={goHome}>Cancel</button>
                </div>
                
            </form>
        </div>
    )
}