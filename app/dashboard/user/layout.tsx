// /app/dashboard/user/layout.tsx

import React from 'react';

import UserDashboard from './components/UserDashboard';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {/* Optional Header */}
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <UserDashboard />
        {/* {children} Render child components if needed */}
      </main>

      {/* Optional Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 AssignAid</p>
      </footer>
    </div>
  );
};

export default Layout;
