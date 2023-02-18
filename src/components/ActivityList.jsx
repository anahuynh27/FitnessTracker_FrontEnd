import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllActivities, fetchAddActivitiesByRoutineId } from '../api/api';
const ActivityList = ({ setActivity, routineId }) => {
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState(0);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  const history = useNavigate();

  const allActivities = async () => {
    const allActivities = await fetchAllActivities();
    console.log({ allActivities });
    setActivity(allActivities);
    setActivities(allActivities);
  };

  useEffect(() => {
    allActivities();
  }, []);

  useEffect(() => {}, [activityId]);

  const handleChange = (e) => {
    // setSelected(e.target.value);
    setActivityId(e.target.value);
  };
  console.log({ activityId, count, duration });

  useEffect(() => {
    if ((routineId, count, duration)) {
      attachActivity();
    }
  }, [routineId, count, duration]);

  const attachActivity = async () => {
    console.log({ routineId, activityId, count, duration });
    const activities = await fetchAddActivitiesByRoutineId(
      routineId,
      activityId,
      count,
      duration
    ); //map addActivity array run fetch for each same routine id,  unique activity id, count and duration
    console.log({ activities });
    history('/myroutines');
  };

  return (
    //fetch all activities
    //map activities with a checkbox
    // input for count and duration
    //when activity checked add to object in state
    //when user saves, run two fetch request add routines and add add activities to routine

    <div>
      <select
        onChange={handleChange}
        className='select select-info w-full max-w-xs'
      >
        <option value='select activity'>select activity</option>
        {activities.map((a) => (
          <option value={a.id}>{a.name}</option>
        ))}
      </select>

      <label className='label'>
        <span className='label-text'>Count</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <label className='label'>
        <span className='label-text'>Duration</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
    </div>
  );
};

export default ActivityList;
