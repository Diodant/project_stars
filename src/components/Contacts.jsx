import React from 'react';
import PhoneImg from '../img/phone-call_8643567.png';
import LocationImg from '../img/gps_13403055.png';
import EmailImg from '../img/email_458230.png';

function Contacts() {
  return (
    <div className="contacts-container">
    <h2 className="contacts-title">КОНТАКТЫ</h2>
    <div className="contact-section">
      <div className="contact-item">
        <img src={PhoneImg} alt="Phone Icon" />
        <div className="contact-info">
          <strong>Телефон:</strong>
          <p>+7 926 495 54 25</p>
        </div>
      </div>
      <div className="contact-item">
        <img src={EmailImg} alt="Email Icon" />
        <div className="contact-info">
          <strong>E-mail:</strong>
          <p>beautystars@gmail.com</p>
        </div>
      </div>
      <div className="contact-item">
        <img src={LocationImg} alt="Location Icon" />
        <div className="contact-info">
          <strong>Адрес:</strong>
          <p>Москва, Ленинградский просп., 36</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contacts;
