import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsernameRoutines, fetchAddRoutine, fetchMe, fetchDeleteRoutine } from '../api/api';

const MyRoutines = ({ token, setToken, isLoggedIn, setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [message, setMessage] = useState('');

  const history = useNavigate();

  useEffect(() => {

    if (!token) {
      setIsLoggedIn(false);
      // history('/');
    } else {
      const checkToken = localStorage.getItem('token');
      setToken(checkToken);
      setIsLoggedIn(true);
      me();
    }
  }, []);

  useEffect(() => {}, [routines])

  const me = async () => {
    const { username: username } = await fetchMe(token);
    const myRoutines = await fetchUsernameRoutines(token, username);
    setRoutines(myRoutines);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGoal('');
    setName('');

    try {
      const addRoutine = await fetchAddRoutine(token, isPublic, name, goal);
      me();
      setMessage(`Routine ${addRoutine.name} added successfully!`);
    } catch (error) {
      setMessage(error.message);
      console.error('error in handle Submit', error);
    }
  };


  const handleDelete = async (routineId, token) => {
    console.log(routineId);
    console.log(token);
    try {
      const deleteRoutine = await fetchDeleteRoutine(routineId, token);
      console.log(deleteRoutine);
      me();
    } catch (error) {
      console.error("error deleting");
    }
  }
console.log({routines});

  return (
    <div>
      <div>MyRoutines</div>
      <form onSubmit={handleSubmit}>
        <label className=' text-xs font-medium text-gray-700'>Routine:</label>
        <input
          className='mt-1 rounded-md border-gray-200 shadow-sm sm:text-sm'
          type='text'
          name='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label className=' text-xs font-medium text-gray-700'>Goal:</label>
        <input
          className='mt-1 rounded-md border-gray-200 shadow-sm sm:text-sm'
          type='text'
          name='goal'
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          required
        />
        <label className=' text-xs font-medium text-gray-700'>Public?</label>
        <input
          type='checkbox'
          checked={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <button type='submit'>Submit Routine</button>
        <span>{message}</span>
      </form>
      <div className='overflow-x-auto'>
        <table className='min-w-full font-serif text-sm divide-y-2 divide-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                routine
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                goal
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                public
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {routines?.map((r) => {
              return (
                <tr key={r.id}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {r.name}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.goal}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {r.isPublic.toString()}
                  </td>
                  <td>
                    <span>edit</span>
                  </td>
                  <td>
                    <button
                      onClick={() => {handleDelete(r.id, token)}}
                    >delete</button>
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

export default MyRoutines;
