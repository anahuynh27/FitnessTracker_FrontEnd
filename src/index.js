import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  Activities,
  Routines,
  MyRoutines,
  Homepage,
  Register,
  Login,
} from './components';
import './index.css';

const App = () => {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const checkToken = localStorage.getItem('token');
      setToken(checkToken);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, token]);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='p-4 bg-white'>
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          token={token}
          setToken={setToken}
        />
      </header>
      {/* body  */}
      <div className='flex flex-row flex-1'>
        <main className='flex-1 p-4'>
          <Routes>
            <Route path='/home' element={<Homepage />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/routines' element={<Routines />} />
            <Route
              path='/myroutines'
              element={
                <MyRoutines
                  token={token}
                  setToken={setToken}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path='/login'
              element={
                <Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route
              path='/register'
              element={
                <Register setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
              }
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
