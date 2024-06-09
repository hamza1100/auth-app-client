import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      navigate('/signin');
    }
  })

  function logout() {
    localStorage.clear();
    navigate('/signin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h2 className="text-2xl">Welcome to the application</h2>
      <span>
      <button type="submit" onClick={logout} className="bg-blue-500 text-white p-2 rounded">Logout</button>
      </span>
    </div>
  );
};

export default Dashboard;
