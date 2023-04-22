import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBContainer } from 'mdb-react-ui-kit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getFirestore } from '@firebase/firestore';
import { SubLocation } from '../components/Quiz/destinations';
import { useNavigate } from 'react-router-dom';

const Trips: React.FC = () => {
    const { currentUser } = useAuth();
    const [trips, setTrips] = useState<SubLocation[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            const fetchTrips = async () => {
                const userTripsRef = collection(getFirestore(), 'userTrips');
                const q = query(userTripsRef, where('userId', '==', currentUser.uid));
                const querySnapshot = await getDocs(q);
                const tripList: SubLocation[] = [];

                querySnapshot.forEach((doc) => {
                    tripList.push({
                        id: doc.data().tripId,
                        name: doc.data().tripName,
                        destinationName: doc.data().destinationName,
                    });
                });

                setTrips(tripList);
            };

            fetchTrips();
        }
    }, [currentUser]);

    const redirectToRegister = () => {
        navigate('/signup');
    };

    return (
        <MDBContainer>
            <h1 className="text-center mt-3">Your Trips</h1>
            {!currentUser ? (
                <div className="text-center">
                    <p>Please log in or register to see your trips.</p>
                    <MDBBtn color="primary" onClick={redirectToRegister}>
                        Register
                    </MDBBtn>
                </div>
            ) : (
                <div>
                    {trips.length > 0 ? (
                        trips.map((trip) => (
                            <MDBCard key={trip.id} className="mb-3">
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        {trip.name} - {trip.destinationName}
                                    </MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        ))
                    ) : (
                        <p className="text-center">You have no trips added yet.</p>
                    )}
                </div>
            )}
        </MDBContainer>
    );
};

export default Trips;
