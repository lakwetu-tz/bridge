import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/DashBoard';
import MainLayout from './layout/MainLayout'
import Login from './pages/LoginPage';

import { useAuth } from './context/AuthProvider';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login />} />
      
          <Route element={ <MainLayout /> }>
          <Route path="/home" element={<Dashboard />} />
        </Route>
  
      </Routes>
      
    </Router>
  );
}

export default App;
