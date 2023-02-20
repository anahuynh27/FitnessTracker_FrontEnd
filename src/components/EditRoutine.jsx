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
    history("/myroutines");
  }

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
            <span className='mt-5'>Activity: {routineEdit.activities[0].name}</span>
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
            <label className='text-xs font-medium text-gray-700 my-3'>Public</label>
            <input
              className='checkbox checkbox-info checkbox-sm'
              type='checkbox'
              checked={isPublic}
              onChange={(event) => setIsPublic(event.target.checked)}
            />
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

export default EditRoutine;
