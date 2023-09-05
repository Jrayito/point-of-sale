import React from 'react';
import './assets/bootstrap/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
