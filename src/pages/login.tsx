import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';


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
                    <button onClick={signIn}>Submit</button>
                    <button onClick={goHome}>Cancel</button>
                </div>
            </form>
        </div>
    )
}