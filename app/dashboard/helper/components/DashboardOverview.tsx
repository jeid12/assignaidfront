// components/DashboardOverview.tsx
import React from 'react';
import './dashboard-overview.css'; // Add your styles

interface Stats {
  totalUsers: number;
  totalAssignments: number;
  pendingRequests: number;
}

const DashboardOverview: React.FC = () => {
  // Mock data; replace this with real data fetched from your API
  const stats: Stats = {
    totalUsers: 100,
    totalAssignments: 50,
    pendingRequests: 10,
  };

  return (
    <div className="dashboard-overview">
      <h2>Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat">
          <h3>Total Assignments</h3>
          <p>{stats.totalAssignments}</p>
        </div>
        <div className="stat">
          <h3>Pending Requests</h3>
          <p>{stats.pendingRequests}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
