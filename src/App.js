import React from 'react';
import './assets/bootstrap/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/Login.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
