// /app/dashboard/user-dashboard/components/AddAssignment.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AddAssignment: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('http://127.0.0.1:8000/assignments/', {
        title,
        description,
      });
      // Reset form and close the modal or navigate
      setTitle('');
      setDescription('');
      onClose(); // Close the form after submission
    } catch (err) {
      setError('Error creating assignment');
      console.error(err);
    }
  };

  return (
    <div className="add-assignment-form">
      <h2>Add Assignment</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddAssignment;
