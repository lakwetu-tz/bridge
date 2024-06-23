import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/DashBoard';
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={ <MainLayout /> }>
          <Route path="/" element={<Dashboard />} />

        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
