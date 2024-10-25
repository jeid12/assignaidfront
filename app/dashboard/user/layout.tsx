// /app/dashboard/user-dashboard/layout.tsx

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const UserDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
