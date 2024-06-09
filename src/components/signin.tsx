import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/user/signin`, { email, password });
      localStorage.setItem('userToken', response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response.data.message || 'Error signing in');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl mb-6">Sign In</h2>
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 p-2 border rounded w-full"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign In</button>
        <text>
          Don't have an account? <a href='/signup' style={{color: 'red'}}>Sign up</a>
        </text>
      </form>
    </div>
  );
};

export default SignIn;
