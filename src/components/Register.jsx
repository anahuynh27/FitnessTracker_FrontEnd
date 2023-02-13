import React, { useEffect, useState } from 'react';
import { fetchRegister } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const register = await fetchRegister(username, password);

      setToken(register.data.token);
      localStorage.setItem('token', register.data.token);
      history.pushState('/account');
    } catch (error) {
      console.error('Error Registering, please try again', error);
    }
  };

  return (
    <div>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label>Create Username: </label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <labal>Create Password: </labal>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type='submit'>Create Account!</button>
      </form>
    </div>
  );
};

export default Register;
