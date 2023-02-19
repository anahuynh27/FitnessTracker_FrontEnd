import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsernameRoutines, fetchDeleteRoutine } from '../api/api';

const MyRoutines = ({ token, username, setRoutineEdit }) => {
  const [routines, setRoutines] = useState([]);

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

  return (
    <div>
      <Link to='/add'>
        <button className='btn btn-secondary btn-sm'>Create Routine</button>
      </Link>
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
