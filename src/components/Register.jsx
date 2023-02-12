import React, {useState} from 'react';
import { fetchRegister } from '../api/api';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <div>Register</div>;
};

export default Register;
