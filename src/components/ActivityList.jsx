import React, { useState, useEffect } from 'react';
import { fetchAllActivities } from '../api/api';
const ActivityList = ({setActivity, setActivityId}) => {
  const [activities, setActivities] = useState([]);
  const [selected, setSelected] = useState('');

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    console.log({ allActivities });
    setActivity(allActivities);
    setActivities(allActivities)
  };
  
useEffect(() => {
  allActivities();
}, [])
  
  useEffect(() => {}, [selected])

  const handleChange = (e) => {
    setSelected(e.target.value);
    setActivityId(e.target.value);
  }
  console.log(selected);
  
  return (
    //fetch all activities
    //map activities with a checkbox
    // input for count and duration
    //when activity checked add to object in state
    //when user saves, run two fetch request add routines and add add activities to routine
    
    <div>
      <select onChange={handleChange}  className="select select-info w-full max-w-xs">
        <option value='select activity'>select activity</option>
        {activities.map((a) => (
          <option value = {a.id}>{a.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ActivityList;
