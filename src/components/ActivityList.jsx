import React, { useState } from 'react';
import { fetchAllActivities } from '../api/api';
const ActivityList = () => {
  const [activity, setActivity] = useState([]);

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    console.log({ allActivities });
  };

  allActivities();
  return (
    //fetch all activities
    //map activities with a checkbox
    // input for count and duration
    //when activity checked add to object in state
    //when user saves, run two fetch request add routines and add add activities to routine
    <></>
  );
};

export default ActivityList;
