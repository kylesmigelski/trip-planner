import React, {useEffect, useState} from 'react';
import { QuizQuestion, questions} from '../components/Quiz/questions';
import { Destination, SubLocation, destinations, calculateTripRecommendation } from '../components/Quiz/destinations';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [preferences, setPreferences] = useState<string[]>([]);
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [recommendedTrips, setRecommendedTrips] = useState<SubLocation[]>([]);

    const handleAnswerClick = (value: string) => {
        setPreferences([...preferences, value]);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    useEffect(() => {
        if (preferences.length === questions.length ) {
            setIsQuizComplete(true);
            const bestTrips = calculateTripRecommendation(preferences);
            setRecommendedTrips(bestTrips);
            console.log(preferences)
        }
    }, [preferences]);


    return (
        <MDBContainer>
            <MDBRow className="justify-content-center mt-5">
                <MDBCol md="6">
                    <h1 className="text-center mb-4">Trip Preference Quiz</h1>
                    {!isQuizComplete ? (
                        <>
                            <p className="text-center">{questions[currentQuestion].text}</p>
                            <div className="d-flex justify-content-around mt-4">
                                {questions[currentQuestion].answers.map((answer) => (
                                    <MDBBtn
                                        key={answer.id}
                                        color="primary"
                                        onClick={() => handleAnswerClick(answer.value)}
                                    >
                                        {answer.text}
                                    </MDBBtn>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            {recommendedTrips.length > 0 && (
                                <>
                                    <h2>Recommended Trips</h2>
                                    <p>Here are your recommended trips based on your preferences and budget:</p>
                                    <ul>
                                        {recommendedTrips.map((trip) => (
                                            <li key={trip.id}>
                                                <strong>{trip.name}</strong> in{' '}
                                                <strong>
                                                    {
                                                        destinations.find((destination) =>
                                                            destination.subLocations.some((subLocation) => subLocation.id === trip.id)
                                                        )?.name
                                                    }
                                                </strong>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};


    export default Quiz;