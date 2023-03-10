import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsernameRoutines, fetchDeleteRoutine } from '../api/api';

const MyRoutines = ({ token, username, setRoutineEdit }) => {
  const [routines, setRoutines] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getMyRoutines();
  }, [username]);

  const getMyRoutines = async () => {
    if (username) {
      const myRoutines = await fetchUsernameRoutines(token, username);
      setRoutines(myRoutines);
    }
  };

  const handleDelete = async (routineId, token) => {
    try {
      await fetchDeleteRoutine(routineId, token);
      getMyRoutines();
    } catch (error) {
      console.error('error deleting');
    }
  };

  return (
    <div>
      <span className='flex justify-center'>
        <Link to='/add'>
          <button className='btn btn-secondary btn-sm '>Create Routine</button>
        </Link>
      </span>
      {
        <form
          className='flex justify-center px-5 mt-6'
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className='w-full max-w-xs input input-bordered input-secondary'
            value={search}
            placeholder='search'
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </form>
      }
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
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                activity
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                count
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                duration
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {routines
              .filter((r) => {
                if (search === '') {
                  return r;
                } else if (r.name.toLowerCase().includes(search)) {
                  return r.name;
                } else if (r.goal.toLowerCase().includes(search)) {
                  return r.goal;
                }
              })
              ?.map((r) => {
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
                      {r.activities.map((ra) => {
                        return <span key={ra.id}>{ra.name}</span>;
                      })}
                    </td>
                    <td>
                      {r.activities.map((ra) => {
                        return <span key={ra.id}>{ra.count}</span>;
                      })}
                    </td>
                    <td>
                      {r.activities.map((ra) => {
                        return <span key={ra.id}>{ra.duration}</span>;
                      })}
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
