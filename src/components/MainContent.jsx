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
import Gallery1 from '../img/gallery/1.png';
import Gallery2 from '../img/gallery/2.png';
import Gallery3 from '../img/gallery/3.png';
import Gallery4 from '../img/gallery/4.png';
import Gallery5 from '../img/gallery/5.png';
import Gallery6 from '../img/gallery/6.png';
import Gallery7 from '../img/gallery/7.png';
import Gallery8 from '../img/gallery/8.jpg';
import Gallery9 from '../img/gallery/9.jpg';
import Gallery10 from '../img/gallery/10.png';
import Gallery11 from '../img/gallery/11.png';
import Gallery12 from '../img/gallery/12.jpg';
import Gallery13 from '../img/gallery/13.png';
import Gallery14 from '../img/gallery/14.png';
import Gallery15 from '../img/gallery/15.png';
import Gallery16 from '../img/gallery/16.png';
import Gallery17 from '../img/gallery/17.png';
import Gallery18 from '../img/gallery/18.png';
import Gallery19 from '../img/gallery/19.jpg';
import Gallery20 from '../img/gallery/20.png';
import Gallery21 from '../img/gallery/21.png';
import Gallery22 from '../img/gallery/22.png';
import Gallery23 from '../img/gallery/23.png';
import Gallery24 from '../img/gallery/24.png';
import Gallery25 from '../img/gallery/25.jpg';
import Gallery26 from '../img/gallery/26.png';
import Gallery27 from '../img/gallery/27.jpg';
import Gallery28 from '../img/gallery/28.jpg';
import Gallery29 from '../img/gallery/29.png';
import Gallery30 from '../img/gallery/30.png';

const MainContent = () => {

  const gallerys = [
    Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
    Gallery6, Gallery7, Gallery8, Gallery9, Gallery10,
    Gallery11, Gallery12, Gallery13, Gallery14, Gallery15,
    Gallery16, Gallery17, Gallery18, Gallery19, Gallery20,
    Gallery21, Gallery22, Gallery23, Gallery24, Gallery25,
    Gallery26, Gallery27, Gallery28, Gallery29, Gallery30,
  ];

  return (
    <div>
    <div className="main-content">
      <div className="overlay-text">
        <div className='main-text-wrap'>
      <div className='maincon-title'>Звезды красоты</div>
        <div className='maincon-sub-title'>BEAUTY ART FESTIVAL</div>
        <div className='maincon-sub2-title'><span className='text-color'>БЬЮТИ</span> - СОБЫТИЕ <span className='text-color'>№1</span></div>
        <button className="maincon-button">Чемпионаты</button>
        </div>
      </div>
    </div>
    <div className='wrapper'>
    <div className="stats-section">

        <div className="stat-item">
          <div className="stat-number">4</div>
          <div className="stat-description">чемпионатов мира</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><span className='color-black'>14</span></div>
          <div className="stat-description">обучающих программ</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1000+</div>
          <div className="stat-description">участников</div>
        </div>

      </div>
          <div className="stats-section-2">

        <div className="stat-item-2">
          <div className="stat-number-2"><span className='color-black'>12</span></div>
          <div className="stat-description">стран мира</div>
        </div>
        <div className="stat-item">
          <div className="stat-number-2">100+</div>
          <div className="stat-description">владельцев салонов красоты</div>
        </div>

      </div>
      </div>
          <section className='main-section'>
          <div className='wrapper'>
    <div className='for-title'>О конкурсе "Звезды красоты"</div>
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
<section className='target-section'>
          <div className='wrapper'>
    <div className='target-title'>Наши цели</div>
    <div className='target-cont'>
    <div className="target-text">
    Международный конкурс beauty мастеров "Звезды красоты" призван поднять стандарты качества в индустрии красоты, стимулируя профессионалов к совершенствованию своих навыков. Конкурс объединяет ведущих специалистов со всего мира, создавая мощную профессиональную сеть и предоставляя платформу для обмена опытом и знаниями. Он выделяет и поддерживает таланты, предоставляя им возможность получить заслуженное признание и продвигать свою карьеру. Конкурс также способствует распространению новейших тенденций и инноваций в индустрии, ставя новые стандарты и вдохновляя на творчество и инновации. "Звезды красоты" - это не только соревнование, но и событие, которое активно способствует развитию и процветанию индустрии красоты на международной арене.
    </div>
        </div>
    </div>
    </section>
    <section className='for-section'>
    <div class="for-content">
    <h2 class="for-title">ПАРТНЕРЫ</h2>
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
    <div className='gallery-title'>
    <h2 class="for-title">Фотогалерея</h2>
    </div>
    <div className="gallery-con">
      {gallerys.map((gallery, index) => (
        <div key={index} className="gallery-card">
          <img src={gallery} alt={`Gallery ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default MainContent;
