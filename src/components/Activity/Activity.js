import React from 'react';
import './Activity.css'

const Activity = ({ activity }) => {
    const { image, name, age, time } = activity;

    return (
        <div className='activity'>
            <div className='pose-img'>
                <img src={image} alt="" />
            </div>
            <div className='pose-info'>
                <h2>{name}</h2>
                <p>For age : {age}</p>
                <p>Time required : {time}</p>
            </div>
            <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default Activity;