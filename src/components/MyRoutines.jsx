import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchUsernameRoutines,
  fetchAddRoutine,
  fetchDeleteRoutine,
} from '../api/api';
import ActivityList from './ActivityList';

const MyRoutines = ({ token, username, setRoutineEdit }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMyRoutines();
  }, [username]);

  const getMyRoutines = async () => {
    console.log({ username });
    if (username) {
      const myRoutines = await fetchUsernameRoutines(token, username);
      console.log({ myRoutines });
      setRoutines(myRoutines);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGoal('');
    setName('');

    try {
      const addRoutine = await fetchAddRoutine(token, isPublic, name, goal);
      getMyRoutines();
      setMessage(`Routine ${addRoutine.name} added successfully!`);
    } catch (error) {
      setMessage(error.message);
      console.error('error in handle Submit', error);
    }
  };

  const handleDelete = async (routineId, token) => {
    console.log(routineId);
    console.log(token);
    try {
      const deleteRoutine = await fetchDeleteRoutine(routineId, token);
      console.log(deleteRoutine);
      getMyRoutines();
    } catch (error) {
      console.error('error deleting');
    }
  };

  console.log({ routines });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center space-x-5'>
          <label className='text-xs font-medium text-gray-700 '>Routine:</label>
          <input
            className='mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
            type='text'
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label className='text-xs font-medium text-gray-700 '>Goal:</label>
          <input
            className='mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
            type='text'
            name='goal'
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            required
          />
          <label className='text-xs font-medium text-gray-700 '>Public?</label>
          <input
            className='checkbox checkbox-info checkbox-sm'
            type='checkbox'
            checked={isPublic}
            onChange={(event) => setIsPublic(event.target.checked)}
          />
          <button className='btn btn-secondary btn-sm' type='submit'>
            Submit Routine
          </button>
        </div>
        <span className='flex items-center justify-center text-pink-500'>
          {message}
        </span>
        <ActivityList />
      </form>
      <div className='overflow-x-auto'>
        <table className='min-w-full font-serif text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                routine
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                goal
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                public
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {routines?.map((r) => {
              return (
                <tr key={r.id}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {r.name}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.goal}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.isPublic.toString()}
                  </td>
                  <td>
                    <Link to='/edit'>
                      <button
                        htmlFor='my-modal'
                        className='btn btn-sm'
                        onClick={() => setRoutineEdit(r)}
                      >
                        edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(r.id, token);
                      }}
                      className='btn btn-sm'
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRoutines;
