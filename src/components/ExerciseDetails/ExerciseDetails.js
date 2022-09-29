import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = () => {
    return (
        <div>
            <h1>Exercise Details</h1>
            <div className='exercise-time'>
                <h2>Exercise Time</h2>
                <p>200 seconds</p>
            </div>
            <div className='break-time'>
                <h2>Break Time</h2>
                <p>30 seconds</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;