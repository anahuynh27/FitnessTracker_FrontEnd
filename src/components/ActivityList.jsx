import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllActivities, fetchAddActivitiesByRoutineId } from '../api/api';
const ActivityList = ({ setActivity, setActivityId }) => {
  const [activities, setActivities] = useState([]);
  const [sendActivityId, setSendActivityId] = useState(0);

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    console.log({ allActivities });
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
  console.log({ sendActivityId });

  // useEffect(() => {
  //   if ((routineId, count, duration)) {
  //     attachActivity();
  //   }
  // }, [routineId, count, duration]);

  // const attachActivity = async () => {
  //   console.log({ routineId, activityId, count, duration });
  //   const activities = await fetchAddActivitiesByRoutineId(
  //     routineId,
  //     activityId,
  //     count,
  //     duration
  //   ); //map addActivity array run fetch for each same routine id,  unique activity id, count and duration
  //   console.log({ activities });
  //   history('/myroutines');
  // };

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
