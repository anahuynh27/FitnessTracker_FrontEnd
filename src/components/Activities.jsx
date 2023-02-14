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
        <table className='min-w-full font-serif text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Activities
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Description
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {activities.map((a) => {
              return (
                <tr key={a.id}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {a.name}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
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
