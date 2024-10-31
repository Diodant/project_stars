import React, { useState } from 'react';
import data from './data';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
import data5 from './data5';
import data6 from './data6';
import data7 from './data7';
import data8 from './data8';

function Jur() {

  const [year, setYear] = useState(2023);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  const selectedYearData = data.find((item) => item.year === year);
  const selectedYearData2 = data2.find((item) => item.year === year);
  const selectedYearData3 = data3.find((item) => item.year === year);
  const selectedYearData4 = data4.find((item) => item.year === year);
  const selectedYearData5 = data5.find((item) => item.year === year);
  const selectedYearData6 = data6.find((item) => item.year === year);
  const selectedYearData7 = data7.find((item) => item.year === year);
  const selectedYearData8 = data8.find((item) => item.year === year);

  return (
    <div>
    <section className='jury-section'>
    <div className='wrapper'>
    <div className="jurycon-overlay-text">
        <div className='jurycon-text-wrap'>
      <div className='jurycon-title'>Жюри</div>
        <div className='jurycon-sub-title'>OF BEAUTY ART FESTIVAL</div>
        <div className='jurycon-sub2-title'>Звезды красоты</div>
        </div>
      </div>
    </div>
    </section>
    <section className='main-section'>
    <div className='wrapper'>
    <div className='text mb-50'>Жюри нашего Международного конкурса beauty мастеров "Звезды красоты" состоит из ведущих международных профессионалов индустрии красоты. Эти эксперты были отобраны на основе их профессиональных достижений, глубоких знаний и выдающегося вклада в развитие сферы красоты.</div>
    <div className='text mb-50'>Наши судьи признаны в своих областях и по праву считаются новаторами и эталонами качества. Благодаря своему опыту и профессионализму, они способны объективно оценивать участников, учитывая тонкости и сложности представленных работ.</div>
    <div className='text mb-50'>Быть членом жюри на конкурсе "Звезды красоты" — это не только честь и признание профессионального мастерства, но и возможность влиять на развитие отрасли, поддерживать таланты и стимулировать инновации. Наши судьи играют ключевую роль в формировании стандартов качества и тенденций в индустрии красоты, что делает их участие важным аспектом конкурса.</div>
    <div className='text mb-50'>Судейство на Международном конкурсе beauty мастеров "Звезды красоты" предоставляет уникальную возможность для профессионального роста и обмена знаниями с коллегами и новым поколением специалистов, поддерживая и развивая высокие стандарты и креативность в индустрии.</div>
    <p className='sub-title'>Критерии для отбора судей международного конкурса beauty мастеров “Звезды красоты”:</p>
        <ul className="jury-list mb-50">
        <li>Профессиональный опыт: Каждый судья должен иметь не менее трех лет опыта работы в индустрии красоты. Этот опыт должен быть подтвержден документально, включая портфолио работ, публикации в профессиональных изданиях или рекомендации от ведущих экспертов отрасли.</li>
        <li>Профессионализм и репутация: Судьи должны быть признаны в своей сфере как выдающиеся специалисты, имеющие значительные достижения и признание в профессиональном сообществе. Их профессиональная деятельность должна быть образцом качества и инноваций.</li>
        <li>Этические стандарты: Кандидаты в судьи должны обладать безупречной деловой репутацией, высокими этическими принципами и умением сохранять объективность и непредвзятость при оценке конкурсных работ.</li>
        <li>Понимание тенденций индустрии: Судьи должны быть в курсе последних тенденций и новшеств в индустрии красоты, чтобы их оценки отражали актуальные стандарты и ожидания отрасли.</li>
        <li>Коммуникативные навыки: Необходимы отличные коммуникативные навыки и способность аргументировано обсуждать свои оценки с другими членами жюри, а также умение быть частью команды, стремящейся к справедливому и объективному вердикту.</li>
        <li>Почет и престиж: Быть судьей на конкурсе "Звезды красоты" является высоким признанием профессионального мастерства на международной арене. Это престижная роль, которая предоставляет возможность влиять на стандарты качества в индустрии и поддерживать новые таланты.</li>
        </ul>
        <p className='jury-sub-title'>Оценка работ судейским комитетом конкурса "Звезды красоты"</p>
        <div className='text mb-50'>Оценка конкурсных работ на "Звезды красоты" производится высококвалифицированным судейским комитетом, состоящим из ведущих экспертов индустрии. Каждый судья применяет свой опыт и профессиональные знания для объективного анализа и оценки представленных работ. Процесс оценки организован так, чтобы обеспечить справедливость, прозрачность и беспристрастность.</div>
        <p className='jury-sub-title'>Критерии оценки</p>
        <div className='text mb-50'>Судьи оценивают работы по заранее установленным критериям, которые включают в себя: техническое мастерство, инновационность, креативность, соблюдение стандартов отрасли, и эстетическую привлекательность. Эти критерии разрабатываются с учетом специфики каждой номинации, чтобы точно отразить ключевые аспекты профессионализма в каждой категории.</div>
        <p className='jury-sub-title'>Процесс оценки</p>
        <div className='text mb-50'>Процесс оценки начинается с предварительного рассмотрения всех работ, где каждый судья независимо оценивает каждую заявку. После этого судьи собираются для обсуждения и сравнения своих оценок, обеспечивая тем самым коллегиальную проверку и устранение любых субъективных предвзятостей. Этот этап включает в себя детальное обсуждение заслуг каждой работы и возможное корректирование оценок для достижения консенсуса.</div>
        <p className='jury-sub-title'>Прозрачность и справедливость</p>
        <div className='text mb-50'>Для обеспечения прозрачности процесса, результаты оценок и комментарии судей могут быть доступны участникам после завершения конкурса. Это дает участникам возможность понять, как были оценены их работы и какие аспекты можно улучшить в будущем.</div>
        <p className='jury-sub-title'>Подведение итогов</p>
        <div className='text mb-50'>Итоговые оценки формируются на основе среднего арифметического оценок от всех судей, что гарантирует сбалансированное и справедливое решение. В случае равенства баллов предусмотрены дополнительные меры для определения победителя, например, дополнительный раунд оценки или привлечение дополнительного судейского мнения.</div>
        <div className='text mb-100'>Система оценки на "Звезды красоты" спроектирована так, чтобы отмечать исключительное мастерство и вдохновлять участников на достижение новых высот в индустрии красоты.</div>
        <div>
        <div className="winners-buttons">
          {data.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Маникюр, моделирование, дизайн, педикюр и подология</div>
            <div className="jury-con">
              {selectedYearData.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                      <li>
                        {item.text6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data2.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData2 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Перманентный макияж, а также Lash и Brow направление</div>
            <div className="jury-con">
              {selectedYearData2.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                      <li>
                        {item.text6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data3.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData3 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Парикмахерское искусство</div>
            <div className="jury-con">
              {selectedYearData3.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                      <li>
                        {item.text6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data4.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData4 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Инновации в косметологии</div>
            <div className="jury-con">
              {selectedYearData4.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data4.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData8 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Искусство Визажа</div>
            <div className="jury-con">
              {selectedYearData8.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data5.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData5 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Массаж и телесные терапии </div>
            <div className="jury-con">
              {selectedYearData5.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data6.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData6 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Мастерство в области стиля и имиджа</div>
            <div className="jury-con">
              {selectedYearData6.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="winners-buttons">
          {data7.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData7 && (
          <div className='mb-100'>
            <h2 className='winners-title'>Жюри: {year}</h2>
            <div className='winners-title'>Фотография и видеография в индустрии красоты</div>
            <div className="jury-con">
              {selectedYearData7.items.map((item, index) => (
                <div key={index} className='jury-profile'>
                    <img  src={item.image} alt={`${year}_${index + 1}`} />
                    <div className='jury-profile-card'>
                    <h3 >{item.name} ({item.country})</h3>
                    <ul className="jury-details-list">
                      <li>
                        {item.text1}
                      </li>
                      <li>
                        {item.text2}
                      </li>
                      <li>
                        {item.text3}
                      </li>
                      <li>
                        {item.text4}
                      </li>
                      <li>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
        </div>
      </section>
    </div>
  );
}

export default Jur;
