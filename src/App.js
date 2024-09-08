import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Inicial from './pages/Inicial';
import Membro from './pages/Membro';
import Esposa from './pages/Esposa';
import Filhos from './pages/Filhos';
import Admin from './pages/Admin';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrar" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inicial" element={<Inicial />} />
            <Route path="/esposa" element={<Esposa />} />
            <Route path="/filhos" element={<Filhos />} />
            <Route path="/membro" element={<Membro />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
