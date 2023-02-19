import React, {useState, useEffect} from 'react';
import { fetchUsernameRoutines, fetchAllPublicRoutines } from '../api/api'

const SingleActivity = ({selectedActivity }) => {
    const [routines, setRoutines] = useState([]);



    return (
      <div>
        <header aria-label="Page Header">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          You are now viewing {selectedActivity}'s routines
        </h1>
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
                        {routines.filter((r) => (r.creatorName === selectedActivity))
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
                            )
                        })}
            </tbody>

        </table>
      </div>
    </div>
    )
};

export default SingleActivity;

