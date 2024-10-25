// /app/dashboard/user-dashboard/components/Sidebar.tsx
'use client';
import React from 'react';

interface SidebarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
  handleLogout: () => void;
  onAddAssignmentClick: () => void; // Add this prop
}

const Sidebar: React.FC<SidebarProps> = ({ toggleDarkMode, darkMode, handleLogout, onAddAssignmentClick }) => {
  return (
    <aside className="sidebar">
      <h2>User Dashboard</h2>
      <ul className="menu">
        <li><button onClick={() => {/* Add logic to navigate to home */}}>Home</button></li>
        <li><button onClick={onAddAssignmentClick}>Add Assignment</button></li> {/* Use the new prop */}
        <li><button onClick={() => {/* Add logic to view all assignments */}}>View Assignments</button></li>
        <li><button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
