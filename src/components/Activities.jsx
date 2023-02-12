import React, { useEffect, useState } from 'react';
import { fetchAllActivities } from '../api/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    allActivities();
  }, []);

  const allActivities = async () => {
    try {
      const activities = await fetchAllActivities();
      setActivities(activities);
    } catch (error) {
      console.error('error all activities fn', error);
    }
  };

  return (
    <div>
      {activities.map((a) => {
        return (
          <div key={a.id}>
            <span>NAME: {a.name}</span> {'\n'}
            <span>DESCRIPTION: {a.description}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
