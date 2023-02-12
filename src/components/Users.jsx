import React, {userState} from 'react';

const Users = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = userState("");

  return <div>Users</div>;
};

export default Users;
