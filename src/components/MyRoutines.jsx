import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsernameRoutines, fetchAddRoutine, fetchMe } from '../api/api';

const MyRoutines = ({ token, setToken, isLoggedIn, setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [message, setMessage] = useState('');

  const history = useNavigate();
  // useEffect(() => {
  //   me();
  // }, []);

  useEffect(() => {
    if (!token) {
      const checkToken = localStorage.getItem('token');
      setToken(checkToken);
      setIsLoggedIn(false);
      history('/home');
    }
    me();
  }, [isLoggedIn, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGoal('');
    setName('');

    try {
      const addRoutine = await fetchAddRoutine(token, isPublic, name, goal);
      setMessage('Routine added successfully!');
    } catch (error) {
      setMessage(error.message);
      console.error('error in handle Submit', error);
    }
  };

  const me = async () => {
    const { username: username } = await fetchMe(token);
    const myRoutines = await fetchUsernameRoutines(token, username);
    setRoutines(myRoutines);
    console.log(myRoutines);
  };

  return (
    <div>
      <div>MyRoutines</div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label>Goal: </label>
        <input
          type='text'
          name='goal'
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          required
        />
        <label>Public?</label>
        <input
          type='checkbox'
          checked={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <button type='submit'>Submit Routine</button>
        <span>{message}</span>
      </form>
      <div>
        {routines && (
          <>
            {routines.map((r) => {
              return (
                <div key={r.id}>
                  <span>Routine: {r.name}</span>
                  <span>Goal: {r.goal}</span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MyRoutines;
