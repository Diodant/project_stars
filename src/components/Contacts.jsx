import React from 'react';;

function Contacts() {
  return (
  //   <div className="contacts-container">
  //   <h2 className="title">КОНТАКТЫ</h2>
  //   <div className="contact-section">
  //     <div className="contact-item">
  //       <img src={PhoneImg} alt="Phone Icon" />
  //       <div className="contact-info">
  //         <strong>Телефон:</strong>
  //         <p>+7 926 495 54 25</p>
  //       </div>
  //     </div>
  //     <div className="contact-item">
  //       <img src={EmailImg} alt="Email Icon" />
  //       <div className="contact-info">
  //         <strong>E-mail:</strong>
  //         <p>beautystars@gmail.com</p>
  //       </div>
  //     </div>
  //     <div className="contact-item">
  //       <img src={LocationImg} alt="Location Icon" />
  //       <div className="contact-info">
  //         <strong>Адрес:</strong>
  //         <p>Москва, Ленинградский просп., 36</p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className='contacts-location'>
  //   <h2 className="title">Местоположение</h2>
  //   <img src={LocImg} alt="Location" />
  //   </div>
  // </div>
  <div className="contact-container">
  <h1 className='title'>Контактная информация</h1>
  <div className="contact-block">
    <h2 >Организатор конкурса: Международная Ассоциация Красоты и Ухода (International Association of Beauty and Care)</h2>
    <p><strong>Адрес:</strong> 117405, Россия, Москва, Варшавское шоссе, 21 км</p>
    <p><strong>Телефон:</strong> 8 (800) 550-48-76</p>
    <p><strong>Email:</strong> <a href="mailto:iabc.association@gmail.com">iabc.association@gmail.com</a></p>
    <p><strong>Сайт:</strong> <a href="https://iabc-association.com" target="_blank" rel="noopener noreferrer">iabc-association.com</a></p>
  </div>
  <div className="contact-block">
    <h2>Официальный Email конкурса "Звезды красоты"</h2>
    <p><strong>Email:</strong> <a href="mailto:beautystars@gmail.com">beautystars@gmail.com</a></p>
  </div>
</div>
  );
}

export default Contacts;
