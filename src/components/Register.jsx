<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { fetchRegister } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    handleSubmit();
  }, []);
=======
import React, {useState, useHistory} from 'react';
import { fetchRegister } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
>>>>>>> d164d72e85dff91a85a52f85bc67ea5a96d0360a

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');

    try {
      const register = await fetchRegister(username, password);
<<<<<<< HEAD

      setToken(register.data.token);
      localStorage.setItem('token', register.data.token);
      history.pushState('/account');
=======
      
      if (!register.success) {
        setMessage(register.error.message)
      }

      // setToken(register.data.token);
      // localStorage.setItem('token', register.data.token);
      history.pushState('/account');
      console.log("passed through handleSubmit");
>>>>>>> d164d72e85dff91a85a52f85bc67ea5a96d0360a
    } catch (error) {
      console.error('Error Registering, please try again', error);
    }
  };

  console.log("username", username);
  console.log("password", password);
  // console.log("token", token);

  return (
    <div>
      <div>Register</div>
<<<<<<< HEAD
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
=======
        <form onSubmit={handleSubmit}>
          <label>Create Username: </label>
          <input 
            type='text'
            name="username"
          value={username}
          placeholder="username"
            onSubmit={(event) => setUsername(event.target.value)}
            required
          />
          <label>Create Password: </label>
          <input
            type="password"
            name="password"
          value={password}
          placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type='submit'>Create Account!</button>
        </form>
>>>>>>> d164d72e85dff91a85a52f85bc67ea5a96d0360a
    </div>
  );
};

export default Register;
