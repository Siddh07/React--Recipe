import React from 'react';
import Registeracc from './components/Auth/Register';
import './App.css';
import Login from './components/Auth/Login';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registeracc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />

      </Routes>
    </Router>
  );
}

export default App;
