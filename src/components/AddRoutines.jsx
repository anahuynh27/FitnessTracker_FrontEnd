import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchAddActivitiesByRoutineId, fetchAddRoutine } from '../api/api';
import ActivityList from './ActivityList';

const AddRoutines = ({ token, setActivity, activity }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [count, setCount] = useState('');
  const [duration, setDuration] = useState('');
  // const [activityId, setActivityId] = useState('');
  const [routineId, setRoutineId] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  console.log({ activity });
  // console.log(activityId);
  console.log({ token });

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName('');
    setGoal('');
    setCount('');
    setDuration('');
    const routine = await fetchAddRoutine(token, isPublic, name, goal);
    console.log({ routine });
    const rId = routine.id;
    setRoutineId(rId);

    // Promise.all([routine, activities]);
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center space-x-5 my-6'>
          <div className='form-control w-full max-w-xs items-center'>
            <label className='label'>
              <span className='label-text'>Routine</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className='label'>
              <span className='label-text'>Goal</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
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
                routineId={routineId}
                count={count}
                duration={duration}
                className='w-full max-w-xs'
              />
            </div>

            {/* <label className='label'>
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
            /> */}

            <div>
              <button type='submit' className='btn m-6'>
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
