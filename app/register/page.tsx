'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './register.css';

interface FormData {
  FullName: string;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'helper' | 'admin';
  gender: 'male' | 'female' | 'other';
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    FullName: '',
    username: '',
    email: '',
    password: '',
    role: 'user',
    gender: 'male',
  });
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
        const response = await axios.post('http://127.0.0.1:8000/users/register', {
            FullName: formData.FullName,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            gender: formData.gender,
        });

        console.log('User registered:', response.data);
        router.push('/login'); // Redirect to login after successful registration
    } catch (error: any) {
        console.error('Error during registration:', error.response?.data);
        setError(error.response?.data.detail || 'Registration failed. Please check your details and try again.');
    }
};

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username (6-12 characters)"
          maxLength={12}
          minLength={6}
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (8-100 characters)"
          maxLength={100}
          minLength={8}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="" disabled>Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="helper">Helper</option>
        </select>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
