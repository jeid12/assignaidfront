// /app/dashboard/user-dashboard/components/Sidebar.tsx

import React from 'react';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => router.push('/dashboard/user-dashboard')}>My Assignments</li>
        <li onClick={() => router.push('/dashboard/user-dashboard/create')}>Create Assignment</li>
        {/* Add more navigation links as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
