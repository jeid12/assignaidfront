// /app/dashboard/user-dashboard/components/AssignmentList.tsx

import React from 'react';

const AssignmentList: React.FC<{ assignments: any[] }> = ({ assignments }) => {
  return (
    <div className="assignment-list">
      <h2>Your Assignments</h2>
      {assignments.length === 0 ? (
        <p>No assignments found.</p>
      ) : (
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.title}>
              <h3>{assignment.description}</h3>
              {/* Add buttons for editing and deleting assignments */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignmentList;
