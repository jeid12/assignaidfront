// /app/dashboard/user-dashboard/components/UserDashboard.tsx
'use client'; // Mark this component as a Client Component
import React, { useEffect, useState } from 'react';
import AssignmentList from './AssignmentList';
import Sidebar from './Sidebar'; // Import the Sidebar component
import AddAssignment from './AddAssignment'; // Import the Add Assignment component
import axios from 'axios';
import './UserDashboard.css'; // Import your CSS file for styling

const UserDashboard: React.FC = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showAddAssignment, setShowAddAssignment] = useState(false); // State to manage Add Assignment form visibility

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/assignments/');
      setAssignments(response.data);
    } catch (err) {
      setError('Error fetching assignments');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
  };

  const handleAddAssignmentClick = () => {
    setShowAddAssignment(true); // Show the Add Assignment form
  };

  const handleCloseAddAssignment = () => {
    setShowAddAssignment(false); // Hide the Add Assignment form
    fetchAssignments(); // Refresh assignments after adding
  };

  return (
    <div className={`user-dashboard ${darkMode ? 'dark' : 'light'}`}>
      <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleLogout={handleLogout} />
      <main className="main-content">
        {error && <p className="error">{error}</p>}
        <AssignmentList assignments={assignments} />
        {showAddAssignment && <AddAssignment onClose={handleCloseAddAssignment} />} {/* Conditionally render AddAssignment */}
      </main>
    </div>
  );
};

export default UserDashboard;
