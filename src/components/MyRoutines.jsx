import React, { useState } from 'react';
import { fetchUsernameRoutines, fetchAddRoutine, fetchMe } from '../api/api';

const MyRoutines = ({token}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGoal('');
    setName('');

    try {
      const addRoutine = await fetchAddRoutine(token, isPublic, name, goal);
      setMessage("Routine added successfully!");

    } catch (error) {
      setMessage(error.message);
      console.error("error in handle Submit", error);
    }
  }

  const me = async () => {
    const me = await fetchMe(token);
    const username = me.username;
 
    const myRoutines = await fetchUsernameRoutines(username);
    console.log(myRoutines);
  }
  
  me();

  
  console.log(name);
  console.log(goal);
  console.log(isPublic);
  console.log(token);
  return (
    <div> 
      <div>MyRoutines</div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label>Goal: </label>
        <input
          type="text"
          name="goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          required
        />
        <label>Public?</label>
        <input
          type="checkbox"
          checked = {isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <button type="submit">Submit Routine</button>
        <span>{message}</span>
      </form>
    </div>
  )
};

export default MyRoutines;
