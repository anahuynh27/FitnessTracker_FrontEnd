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
      >
        <option value='select activity'>select activity</option>
        {activities.map((a) => (
          <option value={a.id} key={a.id}>
            {a.name}
          </option>
        ))}
      </select>
      {/* 
      <label className='label'>
        <span className='label-text'>Count</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='w-full max-w-xs input input-bordered'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <label className='label'>
        <span className='label-text'>Duration</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='w-full max-w-xs input input-bordered'
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      /> */}
    </div>
  );
};

export default ActivityList;
