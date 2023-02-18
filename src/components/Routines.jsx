import React, { useState, useEffect } from 'react';
import { fetchAllPublicRoutines } from '../api/api';

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    allRoutines();
  }, []);

  const allRoutines = async () => {
    try {
      const routines = await fetchAllPublicRoutines();
      console.log({ routines });
      setRoutines(routines);
    } catch (error) {
      console.error('error all Routines function', error);
    }
  };

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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Routines;
