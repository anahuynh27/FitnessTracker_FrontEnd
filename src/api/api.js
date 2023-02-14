// get database server
export const APRURL = 'https://fitness-trackr-uyp6.onrender.com/api';

// export fetchRequests for all endpoints

// activities endpoints

// all activities
export const fetchAllActivities = async () => {
  const res = await fetch(`${APRURL}/activities`);
  const json = await res.json();
  return json;
};

//POST /api/activities (*)
export const fetchAddActivity = async (name, description) => {
  const res = await fetch(`${APRURL}/activities`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
    }),
  });
  const json = res.json();
  return json;
};

//PATCH /api/activities/:activityId (*)
export const fetchUpdateActivity = async (name, description, activityId) => {
  const res = fetch(`${APRURL}/activities/${activityId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
    }),
  });
  const json = res.json();
  return json;
};

//GET /api/activities/:activityId/routines
export const fetchGetRoutinesByActivityId = async (activityId) => {
  const res = fetch(`${APRURL}/activities/${activityId}/routines`);
  const json = res.json();
  return json;
};

// routine_activities endpoints
//PATCH /api/routine_activities/:routineActivityId (**)
export const fetchUpdateRA = async (count, duration, routineActivityId) => {
  const res = fetch(`${APRURL}/routine_activities/${routineActivityId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      count: `${count}`,
      duration: `${duration}`,
    }),
  });
  const json = res.json();
  return json;
};

//DELETE /api/routine_activities/:routineActivityId (**)
export const fetchDeleteRA = async (routineActivityId, token) => {
  const res = fetch(`${APRURL}/routine_activities/${routineActivityId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = res.json();
  return json;
};

// routines endpoints
//GET /api/routines
export const fetchAllPublicRoutines = async () => {
  const res = await fetch(`${APRURL}/routines`);
  const json = await res.json();
  return json;
};

//POST /api/routines (*)
export const fetchAddRoutine = async (token, isPublic, name, goal) => {
  const res = await fetch(`${APRURL}/routines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: `${name}`,
      goal: `${goal}`,
      isPublic: `${isPublic}`,
    }),
  });
  const json = res.json();
  if (json.error) {
    throw json.error;
  }
  return json;
};

//PATCH /api/routines/:routineId (**)
export const fetchUpdateRoutine = async (name, goal, isPublic) => {
  const res = fetch(`${APRURL}/${routineId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: `${name}`,
      goal: `${goal}`,
    }),
  });
  const json = res.json();
  return json;
};

//DELETE /api/routines/:routineId (**)
export const fetchDeleteRoutine = async (routineId, token) => {
  const res = fetch(`${APRURL}/routines/${routineId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = res.json();
  return json;
};

//POST /api/routines/:routineId/activities
export const fetchGetActivitiesByRoutineId = async (
  routineId,
  activityId,
  count,
  duration
) => {
  const res = fetch(`${APRURL}/routines/${routineId}/activities`, {
    method: 'POST',
    body: JSON.stringify({
      activityId: `${activityId}`,
      count: `${count}`,
      duration: `${duration}`,
    }),
  });
  const json = res.json();
  return json;
};

// user endpoints
//POST /api/users/register
export const fetchRegister = async (username, password) => {
  const res = await fetch(`${APRURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  return json;
};

//POST /api/users/login
export const fetchLogin = async (username, password) => {
  const res = await fetch(`${APRURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  return json;
};

//GET /api/users/me
export const fetchMe = async (token) => {
  const res = await fetch(`${APRURL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};

//GET /api/users/:username/routines
export const fetchUsernameRoutines = async (token, username) => {
  const res = await fetch(`${APRURL}/users/${username}/routines`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};
