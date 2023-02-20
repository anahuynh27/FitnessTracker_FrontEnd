import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { fetchMe } from './api/api';
import {
  Navbar,
  Activities,
  Routines,
  MyRoutines,
  Homepage,
  Register,
  Login,
  NotFound,
  EditRoutine,
  AddRoutines,
  SingleUser,
  SingleActivity,
} from './components';
import './index.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState('');
  const [routineEdit, setRoutineEdit] = useState('');
  const [activity, setActivity] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedActivityId, setSelectedActivityId] = useState('');
  const isLoggedIn = token !== '';

  const history = useNavigate();
  const me = async () => {
    const { username } = await fetchMe(token);
    setUsername(username);
  };

  useEffect(() => {
    me();
  }, [token]);

  useEffect(() => {}, [selectedUser]);

  const logout = () => {
    localStorage.removeItem('token');
    setUsername('');
    setToken('');
    history('/');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='p-4 bg-white'>
        <Navbar username={username} token={token} logout={logout} />
      </header>
      {/* body  */}
      <div className='flex flex-row flex-1'>
        <main className='flex-1 p-4'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Homepage token={token} />} />
            <Route path='/activities' element={<Activities token={token} />} />
            <Route
              path='/routines'
              element={
                <Routines
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  selectedActivity={selectedActivity}
                  setSelectedActivity={setSelectedActivity}
                  setSelectedActivityId={setSelectedActivityId}
                />
              }
            />
            <Route
              path='/myroutines'
              element={
                <MyRoutines
                  token={token}
                  username={username}
                  setRoutineEdit={setRoutineEdit}
                />
              }
            />
            <Route
              path='/add'
              element={
                <AddRoutines
                  activity={activity}
                  setActivity={setActivity}
                  token={token}
                />
              }
            />
            <Route
              path='/:selectedUser/routines'
              element={<SingleUser selectedUser={selectedUser} />}
            />
            <Route
              path='/:selectedActivity/activities'
              element={
                <SingleActivity
                  selectedActivity={selectedActivity}
                  selectedActivityId={selectedActivityId}
                />
              }
            />
            <Route
              path='/edit'
              element={<EditRoutine routineEdit={routineEdit} token={token} />}
            />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route
              path='/register'
              element={<Register setToken={setToken} />}
            />
          </Routes>
        </main>
      </div>
      {/* footer */}
      <footer className='p-4 text-center bg-white'>
        <div>
          <span className='font-serif'>fitness trackr 2023</span>
        </div>
        <div>
          <span className='text-slate-500'>
            fullstack academy project by ana tran & vincent palomo
          </span>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App tab='home' />
  </BrowserRouter>
);
