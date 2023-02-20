import React, { useState, useEffect } from 'react';
import {fetchGetRoutinesByActivityId} from '../api/api';

const SingleActivity = ({ selectedActivity, selectedActivityId }) => {
  const [activities, setActivities] = useState([]);
  console.log({ selectedActivity });
  console.log({ activities });

  useEffect(() => {
    singleActivity();
  }, [selectedActivity, selectedActivityId]);

  const singleActivity = async () => {
    try {
      const activity = await fetchGetRoutinesByActivityId(selectedActivityId);
      console.log({ activities });
      setActivities(activity);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    history.back();
  };

  return (
    <div>
      <header aria-label='Page Header'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                You are now viewing routines pertaining to {selectedActivity}
              </h1>
              <button
                className='btn btn-secondary btn-sm mt-5'
                onClick={handleClick}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </header>

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
            </tr>
          </thead>

          <tbody>
            {activities.map((a) => {
              return (
                <tr key={a.id}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {a.creatorName}
                  </td>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {a.name}
                  </td>
                  {/* <td>
                    {a.activities.map((aa) => {
                      return <span key={aa.id}>{aa.name}</span>;
                    })}
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleActivity;
