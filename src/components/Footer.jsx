import React from 'react';
import LogoImg from '../img/logo.png';

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
        <ul>
          <li>О Звездах красоты</li>
          <li>Положение</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Предложения</h4>
        <ul>
          <li>Стать моделью</li>
          <li>Стать партнером</li>
          <li>Стать экспонентом</li>
          <li>Забронировать отель</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Наши контакты</h4>
        <p>Украина, г. Киев тел.: +38 068 401 65 10</p>
        <p>info@viridiland.com</p>
        <div className="social-icons">
          {/* Иконки соцсетей */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
