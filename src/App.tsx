// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Dashboard from './components/dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/ >} />
        <Route path="/signin" element={<SignIn/ >} />
        <Route path="/dashboard" element={<Dashboard/ >} />
        <Route path="/" element={<SignUp/ >} />
      </Routes>
    </Router>
  );
};

export default App;
