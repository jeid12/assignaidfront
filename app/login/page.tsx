'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './login.css'; // Import the CSS file here

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token, role } = response.data; // Update based on your backend response
      localStorage.setItem('token', access_token);

      // Redirect based on user role
      if (role === 'admin') {
        router.push('/dashboard/admin');
      } else if (role === 'helper') {
        router.push('/dashboard/helper');
      } else {
        router.push('/dashboard/user');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(error.response?.data || error.message); // Log the error response for debugging
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="login-error">{error}</p>}
      <p className="login-register-link">
        Don&apos;t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
