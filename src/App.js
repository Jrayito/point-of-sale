import React from 'react';
import './assets/bootstrap/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './views/Login.js';
import { AuthProvider } from './context/authContext.js';
import { ProtectedRoute } from './componentes/ProtectedRoute.js';
import { Dashboard } from './views/Dashboard.js';

function App() {
  return (
    <div className="vh-100 bg-body-tertiary">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
