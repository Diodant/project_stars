import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg';
import PhoneImg from '../img/phone-call_8643567.png';
import LocationImg from '../img/gps_13403055.png';
import EmailImg from '../img/email_458230.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={LogoImg} alt="Logo" />
          <p>Международный конкурс beauty мастеров "Звезды красоты" — это не просто конкурс, это мероприятие, где каждый участник — профессионал высочайшего уровня. Это платформа для тех, кто стремится подтвердить своё мастерство на международной арене, демонстрируя уникальные навыки и инновационные подходы в области красоты.</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Категории</h4>
        <Link to="/" className="footer-link">Главная</Link>
        <Link to="/about" className="footer-link">О нас</Link>
        <Link to="/ratings" className="footer-link">Критерии оценки</Link>
      </div>
      <div className="footer-section">
        <h4>Звезды красоты</h4>
        <Link to="/nominations" className="footer-link">Номинации</Link>
        <Link to="/jury" className="footer-link">Жюри</Link>
        <Link to="/winners" className="footer-link">Победители</Link>
      </div>
      <div className="footer-section">
        <h4>Наши контакты</h4>
        <div className='footer-contacts'>
        <p><img src={PhoneImg} alt="Phone Icon" />Украина, г. Киев</p>
        <p><img src={LocationImg} alt="Location Icon" />+38 068 401 65 10</p>
        <p><img src={EmailImg} alt="Email Icon" />info@viridiland.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
