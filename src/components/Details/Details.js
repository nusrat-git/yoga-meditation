import React, { useEffect, useState } from 'react';
import './Details.css';


const Details = ({ newActivityDetail }) => {

    let totalTime = 0;

    for (const activity of newActivityDetail) {
        totalTime = totalTime + activity.time;
    }

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedTime = localStorage.getItem('Break-time');
        if (storedTime !== breakTime) {
            setBreakTime(storedTime);
        }
    }, [breakTime])

    const selectBreak = timeValue => {

        const newBreakTime = timeValue;
        setBreakTime(newBreakTime);

        localStorage.setItem('Break-time', JSON.stringify(newBreakTime));

    }

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
                    <button className='break-btn' onClick={() => selectBreak(10)}>10s</button>
                    <button className='break-btn' onClick={() => selectBreak(20)}>20s</button>
                    <button className='break-btn' onClick={() => selectBreak(30)}>30s</button>
                    <button className='break-btn' onClick={() => selectBreak(40)}>40s</button>
                    <button className='break-btn' onClick={() => selectBreak(50)}>50s</button>
                </div>
            </div>
            <div>
                <h1>Exercise Details</h1>
                <div className='exercise-time'>
                    <h2>Exercise Time</h2>
                    <p>{totalTime} seconds</p>
                </div>
                <div className='break-time'>
                    <h2>Break Time</h2>
                    <p> {breakTime} seconds</p>
                </div>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;