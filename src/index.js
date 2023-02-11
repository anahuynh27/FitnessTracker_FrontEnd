import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Activities } from './components';

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
