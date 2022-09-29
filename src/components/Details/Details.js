import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './Details.css';

const Details = () => {
    return (
        <div className='details'>
            <div className='profile'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>Nusrat Jahan</h1>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='physical-info'>
                <div>
                    <h1>50kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>5</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>22</h1>
                    <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <h1>Add a break</h1>
                <div>
                    <button className='break-btn'>10s</button>
                    <button className='break-btn'>20s</button>
                    <button className='break-btn'>30s</button>
                    <button className='break-btn'>40s</button>
                    <button className='break-btn'>50s</button>
                </div>
            </div>
            <div>
                <ExerciseDetails></ExerciseDetails>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;