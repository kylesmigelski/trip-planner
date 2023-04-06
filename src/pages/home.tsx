import React from 'react';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

export default function Home() {
    return (
        <>
            <div
                className="p-5 text-center bg-image d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/375eba119710403.60a38eb907498.jpg)`,
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    overflowY: 'auto',
                }}
            >
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: '100vh' }}>
                    <MDBContainer>
                        <MDBRow className="d-flex align-items-center justify-content-center">
                            <MDBCol className="text-center">
                                <div className="logo">
                                    <h1 className="App-header ">Welcome to</h1>
                                    <h1 className="App-header h1 mb-5">Trip Planner.</h1>
                                    <h4 className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        Let's plan your dream vacation.
                                    </h4>
                                    <MDBBtn href="/quiz" className="big-button" color="secondary" size="lg">
                                        Get started
                                    </MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        </>
    );
}