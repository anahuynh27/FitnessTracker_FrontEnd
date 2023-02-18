import React, { useState, useEffect } from 'react';
import { fetchAllActivities } from '../api/api';
const ActivityList = () => {
  const [activity, setActivity] = useState([]);

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    console.log({ allActivities });
    setActivity(allActivities);
  };
  
useEffect(() => {
  allActivities();
}, [])

  
  return (
    //fetch all activities
    //map activities with a checkbox
    // input for count and duration
    //when activity checked add to object in state
    //when user saves, run two fetch request add routines and add add activities to routine
    
    <div>
      <select className="select select-info w-full max-w-xs">
        <option value='select activity'>select activity</option>
        {activity.map((a) => (
          <option value = {a.name}>{a.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ActivityList;
