import React, { useEffect, useState } from 'react';
import { fetchAllActivities, fetchAddActivity } from '../api/api';

const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    allActivities();
  }, []);

  useEffect(() => {}, [activities]);

  const allActivities = async () => {
    try {
      const activities = await fetchAllActivities();
      console.log({ activities });
      setActivities(activities);
    } catch (error) {
      console.error('error all activities fn', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setName('');
    setDescription('');

    try {
      const addActivity = await fetchAddActivity(name, description, token);
      if (addActivity.error) {
        setMessage('ERROR! Duplicate activity');
      } else {
        setMessage(`Activity ${addActivity.name} added successfully`);
      }
      allActivities();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {token && (
        <form onSubmit={handleSubmit} className='px-24'>
          <div className='flex items-center justify-center space-x-5'>
            <label className='text-xs font-medium text-gray-700 '>
              Activity:
            </label>
            <input
              className='mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
              type='text'
              name='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label className='text-xs font-medium text-gray-700 '>
              Description:
            </label>
            <input
              className='mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
              type='text'
              name='description'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
            <button className='btn btn-secondary btn-sm' type='submit'>
              Submit Activity
            </button>
          </div>
          <span className='flex items-center justify-center text-pink-500'>
            {message}
          </span>
        </form>
      )}
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
