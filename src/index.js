import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Activities, Routines } from './components';
import './index.css';

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* body  */}
      <div>
        <main>
          <Routes>
            <Route path='/activities' element={<Activities />} />
            <Route path='/routines' element={<Routines />} />
          </Routes>
        </main>
      </div>
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
