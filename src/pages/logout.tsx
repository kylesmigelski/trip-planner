import '../App.css';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { getAuth, signOut} from '@firebase/auth';
import app from "../firebase.js"

export default function Logout() {
    const myNav = useNavigate();

    function goHome(){
        myNav("/");
    }

    const auth = getAuth(app);

    function logout() {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
        goHome()
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

                                <h2 className="fw-bold mb-2 text-uppercase">Are you sure you want to logout?</h2>

                                

                                <div className='d-flex flex-row mt-3 mb-5'>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={logout}>Logout</MDBBtn>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={goHome}>Cancel</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}