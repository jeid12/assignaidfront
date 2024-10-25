// /app/dashboard/user-dashboard/components/UserDashboard.tsx

import React, { useEffect, useState } from 'react';
import AssignmentList from './AssignmentList';
import axios from 'axios';

const UserDashboard: React.FC = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState('');

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/assignments'); // Adjust the endpoint as needed
      setAssignments(response.data);
    } catch (err) {
      setError('Error fetching assignments');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <AssignmentList assignments={assignments} />
      {/* Additional components for creating/updating assignments can be added here */}
    </div>
  );
};

export default UserDashboard;
