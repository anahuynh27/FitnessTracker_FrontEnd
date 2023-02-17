import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUpdateRoutine } from '../api/api';

const EditRoutine = ({ postId, token }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  console.log({ postId, token });

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName('');
    setGoal('');
    await fetchUpdateRoutine(postId, name, goal, isPublic, token);
    history('/myroutines');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control w-full max-w-xs'>
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
        />
        <label className='text-xs font-medium text-gray-700 '>Public</label>
        <input
          className='checkbox checkbox-info checkbox-sm'
          type='checkbox'
          checked={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};

export default EditRoutine;
