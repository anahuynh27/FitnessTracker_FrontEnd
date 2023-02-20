import React, { useState, useEffect } from 'react';
import {
  fetchGetRoutinesByActivityId,
  fetchAllPublicRoutines,
} from '../api/api';

const SingleActivity = ({ selectedActivity, selectedActivityId }) => {
  // const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  console.log({ selectedActivity });
  console.log({ activities });

  useEffect(() => {
    // allRoutines();
    singleActivity();
  }, [selectedActivity, selectedActivityId]);

  // const allRoutines = async () => {
  //   try {
  //     const routines = await fetchAllPublicRoutines();
  //     console.log({ routines });
  //     setRoutines(routines);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

          <tbody>
            {activities.map((a) => {
              return (
                <tr key={a.id}>
                  <td>
                    {a.activities.map((aa) => {
                      return <span key={aa.id}>{aa.name}</span>;
                    })}
                  </td>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {a.creatorName}
                  </td>
                </tr>
              );
            })}

            {/* {routines
              .filter((r) => r.activities.name === selectedActivity)
              .map((r) => {
                return (
                  <tr key={r.id}>
                    <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                      {r.creatorName}
                    </td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                      {r.name}
                    </td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                      {r.goal}
                    </td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                      {r.activities.map((ra) => {
                        return <span key={ra.id}>{ra.name}</span>;
                      })}
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
              })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleActivity;
