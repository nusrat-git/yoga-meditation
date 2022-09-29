import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Meditation.css'

const Meditation = () => {

    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setActivities(data))

    },[])

    return (
        <div className='meditation'>

            <div className='activities'>
                {
                    activities.map(activity=> <Activity activity={activity} key={activity.id}></Activity>)
                }
            </div>

            <div>
                
            </div>
            
        </div>
    );
};

export default Meditation;