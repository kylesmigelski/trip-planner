import React, {useEffect, useState} from 'react';
import {QuizQuestion, questions} from '../components/Quiz/questions';
import {Destination, SubLocation, destinations, calculateTripRecommendation} from '../components/Quiz/destinations';
import {MDBBtn, MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

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
        if (preferences.length === questions.length) {
            setIsQuizComplete(true);
            const bestTrips = calculateTripRecommendation(preferences);
            setRecommendedTrips(bestTrips);
            console.log(preferences)
        }
    }, [preferences]);


    return (
        <div
            className="bg-image d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: `url("https://images.wallpaperscraft.com/image/single/sky_gradient_clouds_170369_3840x2160.jpg")`,
                height: '100vh',
            }}
        >



            <MDBContainer className="d-flex mt-5 justify-content-center" style={{ minHeight: '100vh' }}>
                <MDBCard className="p-5 d-flex mt-5" style={{width: '1000px', height: '400px'}}>
                    <h1 className="text-center mb-4 title-text">Trip Preference Quiz</h1>
                    {!isQuizComplete ? (
                        <>
                            <h4 className="text-center m-4">{questions[currentQuestion].text}</h4>
                            <div className="d-flex justify-content-around mt-4 position-absolute"
                                 style={{bottom: '80px', left: '50%', transform: 'translateX(-50%)'}}>
                                {questions[currentQuestion].answers.map((answer) => (
                                    <MDBBtn
                                        key={answer.id}
                                        style={{ width: '200px' }}
                                        color="primary"
                                        size="lg"
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
                </MDBCard>
            </MDBContainer>
        </div>
    );

};


export default Quiz;