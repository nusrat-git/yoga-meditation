import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import Question from '../Questions/Question';
import './Meditation.css'

const Meditation = () => {

    const [activities, setActivities] = useState([]);
    const [activityDetail, setActivityDetail] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))

    }, [])

    const selectActivity = activity => {

        const newActivityDetail = [...activityDetail, activity];
        setActivityDetail(newActivityDetail);

    }

    return (
        <div>
            <div className='today-activity'>
                <h1>Select Today's Activity</h1>
            </div>
            <div className='meditation'>


                <div className='activities'>
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                            key={activity.id}
                            selectActivity={selectActivity}
                        >

                        </Activity>)
                    }
                </div>

                <div className='detail-bg'>
                    <Details newActivityDetail={activityDetail}></Details>
                </div>


            </div>
            <div>
                <Question></Question>

            </div>
        </div>
    );
};

export default Meditation;