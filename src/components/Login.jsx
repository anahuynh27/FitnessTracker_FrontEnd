import React, { useState, useEffect } from 'react';
import { fetchLogin } from '../api/api';

const Login = () => {
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    login();
  }, []);

  const login = async (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const login = await fetchLogin(username, password);
      if (login) {
        setMessage(login.message);
      }
    } catch (error) {
      console.error('error login fn', error);
    }
  };
  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor='username'>username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          <button type='submit'>login</button>
        </span>
        <span>{message}</span>
      </form>
    </div>
  );
};

export default Login;
