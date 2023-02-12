// get database server
export const APRURL = "https://fitness-trackr-uyp6.onrender.com/api";

// export fetchRequests for all endpoints

// activities endpoints

// all activities
export const fetchAllActivities = async () => {
  const res = await fetch(`${APRURL}/activities`);
  const json = await res.json();
  return json;
};

// routine_activities endpoints

// routines endpoints
export const fetchAllPublicRoutines = async () => {
  const res = await fetch(`${APRURL}/routines`);
  const json = await res.json();
  return json;
};

export const fetchCreateRoutine = async (name, goal, isPublic) => {
  const res = await fetch(`${APRURL}/routines`, {
    method: "POST",
    body: JSON.stringify({
      post: {
        name: `${name}`,
        goal: `${goal}`,
        isPublic: `${isPublic}`,
      },
    }),
  });
  const json = res.json();
  return json;
};

// user endpoints
