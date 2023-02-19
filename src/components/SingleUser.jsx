import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsernameRoutines, fetchAllPublicRoutines } from '../api/api'

const SingleUser = ({selectedUser }) => {
    const [routines, setRoutines] = useState([]);
    const [usersRoutines, setUsersRoutines] = useState([]);
  console.log({ selectedUser });

    useEffect(() => {
        allRoutines();
    }, []);
  useEffect(() => {}, [selectedUser])
    
      const allRoutines = async () => {
        try {
          const routines = await fetchAllPublicRoutines();
          console.log({ routines });
          setRoutines(routines);
        } catch (error) {
          console.error('error all Routines function', error);
        }
      };
  const handleClick = () => {
    history.back()
  }

    return (
      <div>
        <header aria-label="Page Header">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          You are now viewing {selectedUser}'s routines
                </h1>
<button className='btn btn-secondary btn-sm mt-5' onClick={handleClick}>Go Back</button>
      </div>
    </div>
  </div>
        </header>
        
      <div className='overflow-x-auto'>
        <table className='min-w-full font-serif text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
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
                        {routines.filter((r) => (r.creatorName === selectedUser))
                            .map((r) => {
                                return (
                                    <tr key={r.id}>
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

export default SingleUser;

