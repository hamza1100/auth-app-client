import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
      return;
    }
    try {
      // add the base url to .env file
      const response = await axios.post(`http://localhost:5000/user/signup`, { email, name, password });
      localStorage.setItem('userToken', response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response.data.message || 'Error signing up');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl mb-6">Sign Up</h2>
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
        <text>
          Already have an account? <a href='/signin' style={{color: 'red'}}>Sign in</a>
        </text>
      </form>
    </div>
  );
};

export default SignUp;
