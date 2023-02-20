import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchUpdateRoutine, fetchUpdateRA } from '../api/api';

const EditRoutine = ({ routineEdit, token }) => {
  const [name, setName] = useState(routineEdit.name);
  const [goal, setGoal] = useState(routineEdit.goal);
  const [count, setCount] = useState(routineEdit.activities[0].count);
  const [duration, setDuration] = useState(routineEdit.activities[0].duration);
  const [isPublic, setIsPublic] = useState(true);

  const routineActivityId = routineEdit.activities[0].routineActivityId;

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName('');
    setGoal('');
    await fetchUpdateRoutine(routineEdit?.id, name, goal, isPublic, token);
    handleAttachEdit();
  };

  const handleAttachEdit = async () => {
    await fetchUpdateRA(count, duration, routineActivityId, token);
    history('/myroutines');
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
            <span className='mt-5'>
              Activity: {routineEdit.activities[0].name}
            </span>
            <label className='label'>
              <span className='label-text'>Count</span>
            </label>
            <input
              type='number'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <label className='label'>
              <span className='label-text'>Duration</span>
            </label>
            <input
              type='number'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <label className='my-3 text-xs font-medium text-gray-700'>
              Public
            </label>
            <input
              className='checkbox checkbox-info checkbox-sm'
              type='checkbox'
              checked={isPublic}
              onChange={(event) => setIsPublic(event.target.checked)}
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

export default EditRoutine;
