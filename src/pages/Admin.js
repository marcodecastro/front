import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import link from '../images/link.png';


const Admin = () => {

    const navigate = useNavigate();
    
  return (
    <div className="admin">

    <h1>Admin para Admin</h1>

    {/* Ícone de voltar */}
    <img 
    src={link} 
    alt="Link" 
    onClick={() => navigate('/inicial')} // Redireciona para a página inicial
    style={{ cursor: 'pointer', position: 'absolute', top: '20px', left: '20px', width: '40px', height: '40px' }}
  />
  </div>



  )
}

export default Admin