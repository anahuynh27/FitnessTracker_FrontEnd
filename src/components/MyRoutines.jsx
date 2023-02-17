import React, { useState, useEffect } from 'react';
import {
  fetchUsernameRoutines,
  fetchAddRoutine,
  fetchDeleteRoutine,
  fetchUpdateRoutine,
} from '../api/api';

const MyRoutines = ({ token, username }) => {
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

  const handleEdit = async (name, goal, isPublic, token) => {
    try {
      const editRoutine = await fetchUpdateRoutine(name, goal, isPublic, token);
    } catch (error) {
      console.error('error edit function', error);
    }
  };

  console.log({ routines });

  return (
    <div>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Edit your routine</h3>
          <p className='py-4'>
            <form onSubmit={handleEdit}>
              <label>Routine:</label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Goal:</label>
              <input
                type='text'
                name='goal'
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
              <label className='text-xs font-medium text-gray-700 '>
                Public?
              </label>
              <input
                className='checkbox checkbox-info checkbox-sm'
                type='checkbox'
                checked={isPublic}
                onChange={(event) => setIsPublic(event.target.checked)}
              />
            </form>
          </p>
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn' onSubmit={handleEdit}>
              edit
            </label>
          </div>
        </div>
      </div>
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
                    <label htmlFor='my-modal' className='btn'>
                      edit
                    </label>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(r.id, token);
                      }}
                      className='btn'
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
