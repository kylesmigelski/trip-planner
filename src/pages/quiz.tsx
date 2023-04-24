import React, {useEffect, useState} from 'react';
import { questions } from '../components/Quiz/questions';
import { SubLocation, destinations, calculateTripRecommendation} from '../components/Quiz/destinations';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import { useAuth } from "../AuthContext";
import { collection, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";


const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [preferences, setPreferences] = useState<string[]>([]);
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [recommendedTrips, setRecommendedTrips] = useState<SubLocation[]>([]);
    const { currentUser } = useAuth();
    const [buttonClicked, setButtonClicked] = useState<boolean[]>([]);


    const handleButtonClick = (trip: SubLocation, index: number) => {
        addTripToUser(trip).then(() => {
            const newButtonClicked = [...buttonClicked];
            newButtonClicked[index] = true;
            setButtonClicked(newButtonClicked);
        });
    };


    const handleAnswerClick = (value: string) => {
        setPreferences([...preferences, value]);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    useEffect(() => {
        if (preferences.length === questions.length) {
            setIsQuizComplete(true);
            const bestTrips = calculateTripRecommendation(preferences);
            setRecommendedTrips(bestTrips);
            console.log(preferences)
        }
    }, [preferences]);

    const addTripToUser = async (trip: SubLocation) => {
        try {
            const userTripsRef = collection(getFirestore(), "userTrips");
            // @ts-ignore
            const q = query(userTripsRef, where("userId", "==", currentUser.uid), where("tripId", "==", trip.id));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // @ts-ignore
                await addDoc(userTripsRef, {
                    userId: currentUser.uid,
                    tripId: trip.id,
                    tripName: trip.name,
                    destinationName: destinations.find((destination) =>
                        destination.subLocations.some((subLocation) => subLocation.id === trip.id)
                    )?.name,
                });
                console.log("Trip added!");
            } else {
                console.log("Trip already added.");
            }
        } catch (error) {
            console.error("Error adding trip: ", error);
        }
    };

    return (
        <div
            className="bg-image d-flex justify-content-center align-items-center "
            style={{
                backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/174af6150954961.63051cbad9543.jpg")`,
                minHeight: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                overflowY: 'auto',
            }}
        >
            <MDBContainer className="d-flex mt-5 align-content-center flex-column" style={{ minHeight: '100vh' }}>
                <div className="d-flex flex-column align-items-center">
                <h1 className="text-center mt-3 title-text">Trip Preference Quiz</h1>
                <MDBCard className="p-3 d-flex mt-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', width: '1200px', height: '650px'}}>
                    {!isQuizComplete ? (
                        <>
                            <div className="p-1 shadow" style={{backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                                <h1 className="text-center m-3" style={{ fontFamily:'Gill Sans'}}>{questions[currentQuestion].text}</h1>
                            </div>
                            <div
                                className="d-flex justify-content-around position-absolute"
                                style={{ bottom: '70px', left: '50%', transform: 'translateX(-50%)' }}
                            >
                                <MDBRow>
                                    {questions[currentQuestion].answers.map((answer, index) => (
                                        <React.Fragment key={answer.id}>
                                            <MDBCol sm="6" className="d-flex justify-content-center mb-4">
                                                <MDBBtn
                                                    style={{

                                                        width: '400px',
                                                        height: '200px',
                                                        backgroundImage: `url(${answer.image})`,
                                                    }}
                                                    className="question-btn"
                                                    color="primary"
                                                    size="lg"
                                                    onClick={() => handleAnswerClick(answer.value)}
                                                >
                                                    <span className="btn-text">{answer.text}</span>
                                                </MDBBtn>
                                            </MDBCol>
                                            {index % 2 === 1 && <MDBCol sm="12"></MDBCol>}
                                        </React.Fragment>
                                    ))}
                                </MDBRow>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            {recommendedTrips.length > 0 && (
                                <>
                                    <h1>Recommended Trips</h1>
                                    <p>Here are your recommended trips based on your preferences and budget:</p>
                                    <div
                                        className="d-flex justify-content-around position-absolute"
                                        style={{ bottom: '70px', left: '50%', transform: 'translateX(-50%)' }}
                                    >
                                        <MDBRow>
                                        {recommendedTrips.slice(0, 4).map((trip, index) => (
                                            <MDBCol sm="6" className="d-flex justify-content-center mb-4" key={trip.id}>
                                                <MDBCard style={{ width: "22rem" }}>
                                                    <MDBCardBody>
                                                        <h4 className="card-title">{trip.name}</h4>
                                                        <p className="card-text">
                                                            {destinations.find((destination) =>
                                                                destination.subLocations.some((subLocation) => subLocation.id === trip.id)
                                                            )?.name}
                                                        </p>
                                                        <MDBBtn
                                                            color={buttonClicked[index] ? 'light' : 'primary'}
                                                            onClick={() => handleButtonClick(trip, index)}
                                                            disabled={buttonClicked[index]}
                                                        >
                                                            {buttonClicked[index] ? 'Added' : 'Add Trip'}
                                                        </MDBBtn>

                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                        ))}
                                    </MDBRow>
                                    </div>
                                </>
                            )}
                        </div>

                    )}
                </MDBCard>
                </div>
            </MDBContainer>
        </div>
    );

};


export default Quiz;