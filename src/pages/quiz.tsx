import React, {useEffect, useState} from 'react';
import bg from '../assets/grainbg.jpg';
import {QuizQuestion, questions} from '../components/Quiz/questions';
import {Destination, SubLocation, destinations, calculateTripRecommendation} from '../components/Quiz/destinations';
import {MDBBtn, MDBCard, MDBCardImage, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

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
            className="bg-image d-flex justify-content-center align-items-center "
            style={{
                backgroundImage: `url("https://images.wallpaperscraft.com/image/single/mountains_sky_gradient_132512_2560x1440.jpg")`,
                height: '100vh',
            }}
        >
            <MDBContainer className="d-flex mt-5 align-content-center flex-column" style={{ minHeight: '100vh' }}>
                <div className="d-flex flex-column align-items-center">
                <h1 className="text-center mt-3 title-text">Trip Preference Quiz</h1>
                <MDBCard className="p-3 d-flex mt-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.85)', width: '1200px', height: '650px'}}>
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
                </div>
            </MDBContainer>
        </div>
    );

};


export default Quiz;