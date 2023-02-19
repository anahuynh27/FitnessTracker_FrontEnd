import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchAddActivitiesByRoutineId, fetchAddRoutine } from '../api/api';
import ActivityList from './ActivityList';

const AddRoutines = ({ token, setActivity, activity }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activityId, setActivityId] = useState('');
  const [routineId, setRoutineId] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  // console.log({ activity });
  console.log({ activityId, routineId });
  console.log({ token });

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName('');
    setGoal('');
    // setCount(0);
    // setDuration(0);
    const routine = await fetchAddRoutine(token, isPublic, name, goal);
    console.log({ routine });
    const rId = routine.id;
    setRoutineId(rId);

    // if (routineId) {
    //   console.log({ routineId, activityId, count, duration });
    //   const attachActivity = await fetchAddActivitiesByRoutineId(
    //     routineId,
    //     activityId,
    //     count,
    //     duration
    //   );
    //   console.log({ attachActivity });
    //   history('/myroutines');
    // }

    // Promise.all([routine, activities]);
  };

  useEffect(() => {
    console.log({ routineId, activityId, count, duration });
    if (routineId !== '') {
      handleAttach(routineId, activityId, count, duration);
    }
  }, [routineId, activityId]);

  const handleAttach = async (routineId, activityId, count, duration) => {
    console.log({ routineId, activityId, count, duration });
    if (count !== '' && duration !== '') {
      const attachActivity = await fetchAddActivitiesByRoutineId(
        routineId,
        activityId,
        count,
        duration
      );
      console.log({ attachActivity });
      setCount('');
      setDuration('');
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center my-6 space-x-5'>
          <div className='items-center w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Routine</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className='label'>
              <span className='label-text'>Goal</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
            <label className='text-xs font-medium text-gray-700 '>Public</label>
            <input
              className='checkbox checkbox-info checkbox-sm'
              type='checkbox'
              checked={isPublic}
              onChange={(event) => setIsPublic(event.target.checked)}
              required
            />
            <div className='mt-5'>
              <ActivityList
                setActivity={setActivity}
                setActivityId={setActivityId}
                className='w-full max-w-xs'
              />
            </div>

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
            />

            <div>
              <button type='submit' className='m-6 btn'>
                submit
              </button>
              <Link to='/myroutines'>
                <button className='btn'>cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRoutines;
