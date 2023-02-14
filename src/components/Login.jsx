import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../api/api';

const Login = ({ setToken, setIsLoggedIn }) => {
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate();

  // useEffect(() => {
  //   login();
  // }, []);

  const login = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const login = await fetchLogin(username, password);
      if (login) {
        setMessage(login.message);
      }

      setToken(login.token);
      setIsLoggedIn(true);
      localStorage.setItem('token', login.token);
      history('/activities');
    } catch (error) {
      console.error('error login fn', error);
    }
  };
  return (
    <div className='mx-3'>
      <form onSubmit={login}>
        <label htmlFor='username'>username:</label>
        <input
          className='mx-1 mt-1 border-2 rounded-md shadow-sm border-rose-500 sm:text-sm'
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor='password'>password:</label>
        <input
          className='mx-1 mt-1 border-2 rounded-md shadow-sm border-rose-500 sm:text-sm'
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span>
          <button
            className='px-4 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
            type='submit'
          >
            login
          </button>
        </span>
        <span>{message}</span>
      </form>
    </div>
  );
};

export default Login;
