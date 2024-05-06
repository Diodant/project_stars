import React from 'react';
import { Link } from 'react-router-dom';
import Partner1 from '../img/partner1.png';
import Partner2 from '../img/partner2.png';
import Partner3 from '../img/partner3.png';
import Partner4 from '../img/partner4.png';
import Partner5 from '../img/partner5.png';
import Partner6 from '../img/partner6.png';
import Partner7 from '../img/partner7.png';
import Partner8 from '../img/partner8.png';
import Partner9 from '../img/partner9.png';
import Partner10 from '../img/partner10.jpg';

const MainContent = () => {
  return (
    <div>
      {/* <div className="main-content">

        <div className="content-overlay">
          <h1 className="main-title">Международная Премия</h1>
          <h1 className="main-title">“Олимп Красоты”</h1>
          <Link to={{
          pathname: "/form",
          }}>
          <button className="join-button">Подать заявку</button>
          </Link>
        </div>
      </div> */}
          <section className='main-section'>
          <div className='wrapper'>
    <div className='title'>О конкурсе "Звезды красоты"</div>
    <div className='text mb-30'>Международный конкурс beauty мастеров "Звезды красоты" — это не просто конкурс, это мероприятие, где каждый участник — профессионал высочайшего уровня. Это платформа для тех, кто стремится подтвердить своё мастерство на международной арене, демонстрируя уникальные навыки и инновационные подходы в области красоты.</div>
    <Link to={{
          pathname: "/about",
          }}>
          <button className="join-button">Подробнее</button>
          </Link>
    </div>
    </section>
    <section class="for-section">
  <div class="for-content">
    <h2 class="for-title">Номинации</h2>
    <div className='for-text-start'>
    <div class="big-number">01</div>
    <div class="for-text">Маникюр, моделирование, дизайн, педикюр и подология</div>
    </div>
    <div className='for-text-end'>
    <div class="big-number">02</div>
    <div class="for-text">Перманентный макияж, визаж, а также Lash и Brow направление</div>
    </div>
    <div className='for-text-start'>
    <div class="big-number">03</div>
    <div class="for-text">Парикмахерское искусство</div>
    </div>
    <div className='for-text-end'>
    <div class="big-number">04</div>
    <div class="for-text">Инновации в косметологии</div>
    </div>
    <div className='for-text-start'>
    <div class="big-number">05</div>
    <div class="for-text">Массаж и телесные терапии</div>
    </div>
    <div className='for-text-end'>
    <div class="big-number">06</div>
    <div class="for-text">Мастерство в области стиля и имиджа</div>
    </div>
    <div className='for-text-start'>
    <div class="big-number">07</div>
    <div class="for-text">Фотография и видеография в индустрии красоты</div>
    </div>
  </div>
</section>
<section className='main-section'>
          <div className='wrapper'>
    <div className='title'>Наши цели</div>
    <div className='awards-cont'>
    <div className="content-details-list">
    Международный конкурс beauty мастеров "Звезды красоты" является одним из самых значимых событий в индустрии красоты и моды. Это мероприятие собирает ведущих профессионалов со всего мира, каждый из которых уникален в своей области — от визажистов и стилистов до мастеров перманентного макияжа и эстетической медицины. Участие в конкурсе — это не просто возможность показать свое мастерство, но и честь представлять свою страну на международной арене, а также шанс внести свой вклад в глобальные тенденции красоты.
    </div>
        <div className="awards-image"></div>
        </div>
    </div>
    </section>
    <section className='for-section'>
    <div class="for-content">
    <h2 class="for-title">НАШИ ПАРТНЕРЫ</h2>
    <div className="partner-images">
          <div className="partner-card">
            <img src={Partner1} alt="Partner1" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner2} alt="Partner2" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner3} alt="Partner3" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner4} alt="Partner4" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner5} alt="Partner5" className="partner-image" />
          </div>
        </div>
        <div className="partner-images">
          <div className="partner-card">
            <img src={Partner6} alt="Partner6" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner7} alt="Partner7" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner8} alt="Partner8" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner9} alt="Partner9" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner10} alt="Partner10" className="partner-image" />
          </div>
        </div>
    </div>
    </section>
    </div>
  );
};

export default MainContent;
