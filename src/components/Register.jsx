import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../api/api';

const Register = ({setToken, setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const register = await fetchRegister(username, password);
      console.log(register);
      if (register) {
        setMessage(register.message);
      }

      setToken(register.token);
      setIsLoggedIn(true);
      localStorage.setItem('token', register.token);
      history('/activities');
      console.log('passed through handleSubmit');
    } catch (error) {
      console.error('Error Registering, please try again', error);
    }
  };

  console.log('username', username);
  console.log('password', password);
  // console.log("token", token);

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
        <label>Create Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type='submit'>Create Account!</button>
        <span>{message}</span>
      </form>
    </div>
  );
};

export default Register;
