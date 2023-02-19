import React, {useState, useEffect} from 'react';
import {fetchUsernameRoutines, fetchAllPublicRoutines} from '../api/api'

const SingleUser = ({ token, username }) => {
    const [routines, setRoutines] = useState([]);
    const [usersRoutines, setUsersRoutines] = useState([]);

    useEffect(() => {
        allRoutines();
        oneRoutines();
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
    
    const oneRoutines = async () => {
        try {
            const users = await fetchUsernameRoutines(token, username);
            console.log({ users });
            setUsersRoutines(users)
        } catch (error) {
            console.error(error);
        }
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
                    
            <tbody>
            
            </tbody>

        </table>
      </div>
    </div>
    )
};

export default SingleUser;

