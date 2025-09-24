import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import ErrorBoundary from './ErrorBoundary';

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default RootLayout;