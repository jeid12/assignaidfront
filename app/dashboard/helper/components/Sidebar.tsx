// components/Sidebar.tsx
import Link from 'next/link';
import React from 'react';
import './sidebar.css'; // Add styles for the sidebar

interface SidebarProps {
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleLogout }) => {
  return (
    <div className="sidebar">
      <h2>Admin Menu</h2>
      <nav>
        <ul>
          <li><Link href="/admin-dashboard">Dashboard</Link></li>
          <li><Link href="/user-management">User Management</Link></li>
          <li><Link href="/assignment-management">Assignment Management</Link></li>
          <li><Link href="/analytics">Analytics</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
