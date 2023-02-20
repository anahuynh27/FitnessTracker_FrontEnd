import React, { useState, useEffect } from 'react';
import { fetchAllActivities } from '../api/api';
const ActivityList = ({ setActivity, setActivityId }) => {
  const [activities, setActivities] = useState([]);
  const [sendActivityId, setSendActivityId] = useState(0);

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    setActivity(allActivities);
    setActivities(allActivities);
  };

  useEffect(() => {
    allActivities();
  }, []);

  useEffect(() => {}, [sendActivityId]);

  const handleChange = (e) => {
    setSendActivityId(e.target.value);
    setActivityId(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        className='w-full max-w-xs select select-info'
        required
      >
        <option value='select activity'>select activity</option>
        {activities.map((a) => (
          <option value={a.id} key={a.id}>
            {a.name}
          </option>
        ))}
      </select>
      {!setActivityId && <span>Please choose an activity</span>}
    </div>
  );
};

export default ActivityList;
