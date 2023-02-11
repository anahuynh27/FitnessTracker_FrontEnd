// get database server
export const APRURL = 'https://fitness-trackr-uyp6.onrender.com/api';

// export fetchRequests for all endpoints

export const fetchAllActivities = async () => {
  const res = await fetch(`${APRURL}/activities`);
  const json = await res.json();
  return json;
};
