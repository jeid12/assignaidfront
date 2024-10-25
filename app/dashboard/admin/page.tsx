// app/admin/page.tsx
import React from 'react';
import DashboardOverview from './components/DashboardOverview'; // Adjust the import path as needed
import UserManagement from './components/UserManagement'; // Adjust the import path as needed

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <DashboardOverview />
      <UserManagement />
    </div>
  );
};

export default AdminPage;
