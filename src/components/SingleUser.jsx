import React, {useState, useEffect} from 'react';
import { fetchUsernameRoutines, fetchAllPublicRoutines } from '../api/api'

//create a button on Routines.js names so when users click on the name, routes them here
//somehow, pass in that clicked username to here
//fetchUsernameRoutines errors due to token malformation
//use fetchAllPublicRoutines to then filter to one user?


const SingleUser = ({selectedUser }) => {
    const [routines, setRoutines] = useState([]);
    const [usersRoutines, setUsersRoutines] = useState([]);
    console.log({selectedUser});

    useEffect(() => {
        allRoutines();
        // oneRoutines();
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
    
    // const oneRoutines = async () => {
    //     try {
    //         const users = await fetchUsernameRoutines(token, username);
    //         console.log({ users });
    //         setUsersRoutines(users)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

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
                    
            <tbody>
                        {routines.filter((r) => (r.creatorName === selectedUser))
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

export default SingleUser;

