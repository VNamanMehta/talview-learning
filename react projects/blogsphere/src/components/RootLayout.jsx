import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;