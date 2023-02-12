import React, { useEffect, useState } from 'react';
import { fetchAllActivities } from '../api/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    allActivities();
  }, []);

  const allActivities = async () => {
    try {
      const activities = await fetchAllActivities();
      setActivities(activities);
    } catch (error) {
      console.error('error all activities fn', error);
    }
  };

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 text-sm font-serif'>
          <thead>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Name
              </th>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Description
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {activities.map((a) => {
              return (
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                    {a.name}
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {a.description}
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

export default Activities;
