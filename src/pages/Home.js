import React from 'react';
import { Link } from 'react-router-dom';
import redusida from '../images/redusida.jpg';
import '../styles/Home.css';


  const Home = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;  
    const userName = ''; // Buscar o nome do usuário a partir do token ou estado global
 
      return (
        <div className="logged-in-home-page">
          <header className="home-header">
            <h1>Bem-vindo{isLoggedIn ? `, ${userName}` : ''}!</h1> 
            <p>À Comemorações Maçônicas para Chancelaria.</p>
          </header>
    
          <section className="home-content">
            <p>Comemorações maçônicas para chancelaria, além de comemorações diárias, oferece ao chanceler um controle de presenças e página exclusiva com comemorações diárias, semanais de membros e efemérides.</p>
    
            <div className="home-image-container">
              <img src={redusida} alt="Comemorações Maçônicas" className="home-image" />
            </div>
    
            <div className="home-links">
              <Link to="/login" className="home-link">Login</Link>
              <Link to="/registrar" className="home-link">Register</Link>
            </div>
          </section>
    
          <footer id="footer">
            <div>
              <p>&copy; <span id="year">{new Date().getFullYear()}</span> <a href="https://www.facebook.com/notemasterRJ/" id="author" rel="noopener noreferrer" target="_blank">notemaster</a>. Todos os direitos reservados.</p>
              <p>Desenvolvido por <a href="https://www.linkedin.com/in/marco-de-castro/" id="authorLink" rel="noopener noreferrer" target="_blank">Marco de Castro</a></p>
            </div>
          </footer>
        </div>
      );
    }
    
    export default Home;