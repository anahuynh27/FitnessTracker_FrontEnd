import React, {userState} from 'react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = userState("");

  return <div>Register</div>;
};

export default Register;
