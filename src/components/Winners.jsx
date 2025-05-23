import React, { useState, useEffect } from 'react';
import data from './datawin';
import WinImg from '../img/first-position_10000615.png';

function Winners() {
  const [year, setYear] = useState(2023);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  useEffect(() => {
    const replaceName = () => {
      const elements = document.querySelectorAll('[data-translate-custom="true"]');
      elements.forEach((el) => {
        if (document.documentElement.lang !== 'en') {
          if (el.textContent.includes('Дарья Махиня')) {
            el.textContent = 'Daria Makhinia (Ukraine)';
          } else if (el.textContent.includes('Лейла Гаджиева')) {
            el.textContent = 'Leila Gajiyeva (Kazakhstan)';
          }
        }
      });
    };


    replaceName();

    const observer = new MutationObserver(() => {
      replaceName();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const selectedYearData = data.find((item) => item.year === year);

  return (
    <div>
      <section className='winners-section'>
        <div className='wrapper'>
          <div className="jurycon-overlay-text">
            <div className='jurycon-text-wrap'>
              <div className='jurycon-title'>Победители</div>
              <div className='jurycon-sub-title'>OF BEAUTY ART FESTIVAL</div>
              <div className='jurycon-sub2-title'>Звезды красоты</div>
            </div>
          </div>
        </div>
      </section>
      <div className='wrapper'>
        <div className='win'>
          <h2 className='winners-title'>Победители: {year} года <img src={WinImg} alt="Win" /></h2>
          <div className="winners-buttons">
            {data.map((item) => (
              <button key={item.year} onClick={() => handleYearChange(item.year)}>
                {item.year}
              </button>
            ))}
          </div>
          {selectedYearData && (
            <div className="win-card">
              {selectedYearData.items.map((item, index) => (
                <div key={index} className="win-item">
                  <div className='winners-title'>{item.title}</div>
                  <div id='first-place' className='win-title'>
                    1 место - <span
                      className='win-sub-title'
                      data-translate-custom={
                        item.name === 'Лейла Гаджиева' || item.name === 'Дарья Махиня' ? 'true' : 'false'
                      }
                    >
                      {item.name} ({item.country})
                    </span>
                  </div>
                  <div id='second-place' className='win-title'>
                    2 место - <span className='win-sub-title'>{item.name2} ({item.country2})</span>
                  </div>
                  <div id='third-place' className='win-title'>
                    3 место - <span className='win-sub-title'>{item.name3} ({item.country3})</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Winners;
