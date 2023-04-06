import React from 'react';
import Background from "../assets/airplane.jpg";
import {MDBBtn} from "mdb-react-ui-kit";

export default function Home() {
    return (
        <>
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: `url(${Background})`, height: '100vh' }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center h-100'>
                    <div className='text-white'>
                        <h1 className='App-header'>Welcome to Trip Planner!</h1>
                        <h4 className='mb-14' >Lets plan your dream vacation.</h4>
                        <MDBBtn href='/quiz' className='big-button' color={'secondary'} size={'lg'}>
                            Get started
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}