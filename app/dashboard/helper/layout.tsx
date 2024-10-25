// app/admin/layout.tsx
import React from 'react';
import './admin.css'; // Optional: your custom styles for admin layout
import Sidebar from './components/Sidebar'; // Adjust the import path based on your project structure

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
