import React, {useState} from 'react';
import { fetchAllPublicRoutines, fetchCreateRoutine } from '../api/api';

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(null);
  const [activites, setActivities] = useState({})

  useEffect(() => {
    allRoutines();
  }, []);

  const allRoutines = async () => {
    try {
      const routines = await fetchAllPublicRoutines();
      setRoutines(routines);
    } catch (error) {
      console.error("error all Routines function", error);
    }
  };

  return (
    <div>
      {routines.map((r) => {
        return (
          <div key={r.id}>
            <span>CREATORID: {r.creatorId}</span>
            <span>CREATOR NAME: {r.creatorName}</span>
            <span>isPublic: {r.isPublic}</span>
            <span>NAME: {r.name}</span>
            <span>GOAL: {r.goal}</span>
            <span>ACTIVITIES: {r.activites}</span>
          </div>
        )
      })}
    </div>
  )
};

export default Routines;
