import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';

      const res = await axios.post(endpoint, formData);
      setMessage(isLogin ? `Welcome back, ${res.data.name}!` : 'Registration successful!');
      console.log(res.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit} className="space-y-14 text-red-400 rounded-lg">
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
          className="p-2 w-full border-2 border-red-500  rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 w-full border-2 border-red-500  rounded-md"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white items-center flex   rounded-lg">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500 underline"
      >
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
      {message && <p className="mt-4 text-red-400">{message}</p>}
    </div>
  );
};

export default AuthForm;