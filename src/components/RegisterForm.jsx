import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  
  // Access the API base URL from .env
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = isLogin
      ? `${API_BASE_URL}/api/auth/login`
      : `${API_BASE_URL}/api/auth/register`;

    try {
      const res = await axios.post(url, formData);
      setMessage(`Welcome, ${res.data.name || formData.name}!`);
      onLogin(res.data); // Pass user data to parent component
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-blue-300">
        <span className="text-2xl text-red-400">{isLogin ? 'L' : 'R'}</span>
        {isLogin ? 'ogin' : 'egister'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-red-300">
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 w-full border-2 border-red-700 rounded-md"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 w-full border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 w-full border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-500 underline">
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default RegisterForm;
