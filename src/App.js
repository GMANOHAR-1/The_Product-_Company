import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
 import Sidebar from './Components/sidebar';
 import HomePage from './pages/home';
import Register from './pages/register';

function App() {
  return (
    <Router>
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
  );
}

export default App;
