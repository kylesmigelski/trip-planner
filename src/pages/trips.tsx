import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBContainer } from 'mdb-react-ui-kit';
import { collection, getDocs, query, where, addDoc, setDoc, doc, deleteDoc} from 'firebase/firestore';
import { getFirestore } from '@firebase/firestore';
import { SubLocation } from '../components/Quiz/destinations';
import { useNavigate } from 'react-router-dom';



const Trips: React.FC = () => {
    const { currentUser } = useAuth();
    const [trips, setTrips] = useState<SubLocation[]>([]);
    const navigate = useNavigate();
    const [averageRatings, setAverageRatings] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        if (currentUser) {
            fetchTrips().then(r => console.log('Trips fetched!'));
        }
    }, [currentUser]);

    const fetchTrips = async () => {
        const userTripsRef = collection(getFirestore(), 'userTrips');
        const q = query(userTripsRef, where('userId', '==', currentUser?.uid));
        const querySnapshot = await getDocs(q);
        const tripList: SubLocation[] = [];

        for (const doc of querySnapshot.docs) {
            const tripData = doc.data();
            tripList.push({
                id: tripData.tripId,
                name: tripData.tripName,
                destinationName: tripData.destinationName,
                rating: tripData.rating || null,
            });
            await getAverageRating(tripData.tripId);
        }

        setTrips(tripList);
    };

    const handleRatingChange = async (tripId: number, rating: number) => {
        const userTripsRef = collection(getFirestore(), 'userTrips');
        const q = query(userTripsRef, where('userId', '==', currentUser?.uid), where('tripId', '==', tripId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docId = querySnapshot.docs[0].id;
            await setDoc(doc(userTripsRef, docId), { rating: rating }, { merge: true });
            fetchTrips();
        }
        // Update the tripReviews doc with the new rating
        await updateTripRating(tripId, rating);
    };

    const updateTripRating = async (tripId: number, rating: number) => {
        const tripReviewsRef = collection(getFirestore(), 'tripReviews');
        const q = query(tripReviewsRef, where('tripId', '==', tripId));
        const querySnapshot = await getDocs(q);
        const userId = currentUser?.uid;

        if (querySnapshot.empty) {
            // Create a new tripReviews doc with the rating
            console.log('Creating new tripReviews doc')
            await addDoc(tripReviewsRef, {
                tripId: tripId,
                ratings: [{ rating: rating, userId: userId }],
            });
        } else {
            // Update the tripReviews doc with the new rating
            console.log('Updating tripReviews doc')
            const docId = querySnapshot.docs[0].id;
            const docData = querySnapshot.docs[0].data();
            const ratings = docData.ratings;
            const newRatings = [...ratings, { rating: rating, userId: userId }];
            await setDoc(doc(tripReviewsRef, docId), { ratings: newRatings }, { merge: true });
        }
    };

    const getAverageRating = async (tripId: number) => {
        const tripReviewsRef = collection(getFirestore(), 'tripReviews');
        const q = query(tripReviewsRef, where('tripId', '==', tripId));
        const querySnapshot = await getDocs(q);

        let ratings: Array<{ rating: number; userId: string }> = [];

        querySnapshot.forEach((doc) => {
            ratings = doc.data().ratings;
        });

        if (ratings.length === 0) {
            setAverageRatings((prev) => ({ ...prev, [tripId]: 0 }));
            return;
        }
        const sum = ratings.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
        const average = sum / ratings.length;
        // limit average to 2 decimal places
        const averageRounded = Math.round(average * 100) / 100;
        setAverageRatings((prev) => ({ ...prev, [tripId]: averageRounded }));
    };

    const deleteTrip = async (tripId: number) => {
        const userTripsRef = collection(getFirestore(), 'userTrips');
        const q = query(userTripsRef, where('userId', '==', currentUser?.uid), where('tripId', '==', tripId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docId = querySnapshot.docs[0].id;
            await deleteDoc(doc(userTripsRef, docId));
            fetchTrips();
        }
    };

    const redirectToRegister = () => {
        navigate('/signup');
    };

    return (
        <div className="bg-image"
             style={{
                 backgroundImage: `url(https://jorgeartola.com/wp-content/uploads/Loterias22-Portfolio-Poster-01-V01.jpg)`,
                 minHeight: '100vh',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center center',
             }}>
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
                                    <div>
                                        <p>Rate this trip:</p>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                style={{ cursor: 'pointer', color: star <= (trip.rating || 0) ? 'gold' : 'grey' }}
                                                onClick={() => handleRatingChange(trip.id, star)}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                    </div>
                                    <div>
                                        <MDBBtn color="danger" onClick={() => deleteTrip(trip.id)}>
                                            Delete
                                        </MDBBtn>
                                        <span>User Ratings: {averageRatings[trip.id]}</span>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        ))
                    ) : (
                        <p className="text-center">You have no trips added yet.</p>
                    )}
                </div>
            )}
        </MDBContainer>
        </div>
    );
};

export default Trips;


