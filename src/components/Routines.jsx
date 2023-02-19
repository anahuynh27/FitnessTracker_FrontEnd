import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchAllPublicRoutines } from '../api/api';

const Routines = ({selectedUser, setSelectedUser, selectedActivity, setSelectedActivity}) => {
  const [routines, setRoutines] = useState([]);
  const history = useNavigate();
  let { creatorName } = useParams();
  let { activityName } = useParams();
  console.log(selectedActivity);
  console.log(activityName);

  useEffect(() => {
    allRoutines();
  }, [selectedUser, selectedActivity]);

  const allRoutines = async () => {
    try {
      const routines = await fetchAllPublicRoutines();
      console.log({ routines });
      setRoutines(routines);
    } catch (error) {
      console.error('error all Routines function', error);
    }
  };

  const handleClick = (creatorName) => {
    console.log(creatorName);
    setSelectedUser(creatorName);
    history(`/${creatorName}/routines`);
  }

  const handleActivityClick = (activityName) => {
    console.log(activityName);
    setSelectedActivity(activityName);
    history(`/${activityName}/routines`);
  }

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='min-w-full font-serif text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Name
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Routine
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Goal
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Activities
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Description
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Count
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Duration
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {routines.map((r) => {
              return (
                <tr key={r.id}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    <button
                      className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-900 whitespace-nowrap hover:text-pink-500 focus:relative"
                      onClick={() => handleClick(r.creatorName)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                      {r.creatorName}
                    </button>
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.name}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.goal}
                  </td>

                  <td>
                  {/* <button
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-900 whitespace-nowrap hover:text-pink-500 focus:relative"
                    onClick={() => handleActivityClick(activityName)}
                  > */}
                    {r.activities.map((ra) => {
                      return <button
                      className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-900 whitespace-nowrap hover:text-pink-500 focus:relative"
                      onClick={() => handleActivityClick(activityName)}
                      key={ra.id}
                      >{ra.name}</button>;
                    })}
                  {/* </button> */}
                  </td>

                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.activities.map((ra) => {
                      return <span key={ra.id}>{ra.description}</span>;
                    })}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.activities.map((ra) => {
                      return <span key={ra.id}>{ra.count}</span>;
                    })}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.activities.map((ra) => {
                      return <span key={ra.id}>{ra.duration}</span>;
                    })}
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

export default Routines;
