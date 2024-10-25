// app/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page when the app starts
    router.push('/login');
  }, [router]);

  return null; // Optionally, you can render a loading indicator here
};

export default HomePage;
