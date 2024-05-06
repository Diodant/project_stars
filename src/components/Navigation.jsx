import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="branding">
              <div className="logo">
                {/* Вставьте ваш логотип здесь */}
                <img src="logo.png" alt="Логотип" />
              </div>
              <div className="slogan">
                <p>Ваш слоган здесь</p>
              </div>
            </div>
            <div className="top-line"></div>
            <div className="nav-links">
              <Link to="/" className="link">Главная</Link>
              <Link to="/nominations" className="link">Номинации</Link>
              <Link to="/jury" className="link">Жюри</Link>
              <Link to="/winners" className="link">Победители</Link>
              <Link to="/position" className="link">Положение</Link>
              <Link to="/ratings" className="link">Критерии оценки</Link>
              <Link to="/contacts" className="link">Контакты</Link>
            </div>
          </div>
          <div className="bottom-line"></div>
        </nav>
      );
    };

export default Navigation;