import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../components/articles';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));
    const articleRef = useRef(null);

    useEffect(() => {
        if (articleRef.current) {
            articleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [id]);

    if (!article) {
      return <h2>Статья не найдена</h2>;
    }

    return (
        <div>
            <section className='article-section'>
                <div className='wrapper'>
                    <div className="jurycon-overlay-text">
                        <div className='jurycon-text-wrap'>
                            <div className='jurycon-title'>Статьи</div>
                            <div className='jurycon-sub-title'>OF BEAUTY ART FESTIVAL</div>
                            <div className='jurycon-sub2-title'>Звезды красоты</div>
                        </div>
                    </div>
                </div>
            </section>
            <div ref={articleRef} className="article-detail">
                <Link to="/articles" className="back-link">Назад</Link>
                <p className="date">{article.date}</p>
                <h1 className="article-title">{article.title}</h1>
                {article.id === 12 ? (
          <>
            <p>{article.content}</p>
            <img src={article.imageUrl} alt={article.title} className="article-sub-image" />
            <p>{article.content2}</p>
            <p>{article.content3}</p>
            <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
            <p>{article.content4}</p>
            <p>{article.content5}</p>
            <p className='article-sub-title'>{article.content6}</p>
            <p>{article.content7}</p>
            <p>{article.content8}</p>
            <p>{article.content9}</p>
            <p className='article-sub-title'>{article.content10}</p>
              <p>{article.content11}</p>
              <p>{article.content12}</p>
              <p>{article.content13}</p>
              <p className='article-sub-title'>{article.content14}</p>
              <p>{article.content15}</p>
              <p>{article.content16}</p>
              <p>{article.content17}</p>
              <p className='article-sub-title'>{article.content18}</p>
              <p>{article.content19}</p>
              <p>{article.content20}</p>
              <p>{article.content21}</p>
              <p className='article-sub-title'>{article.content22}</p>
              <p>{article.content23}</p>
              <p>{article.content24}</p>
              <p>{article.content25}</p>
              <p className='article-sub-title'>{article.content26}</p>
              <p>{article.content27}</p>
              <p>{article.content28}</p>
              <p>{article.content29}</p>
              <p className='article-sub-title'>{article.content30}</p>
              <p>{article.content31}</p>
              <p>{article.content32}</p>
              <p>{article.content33}</p>
              <img src={article.imageUrl3} alt={article.title} className="article-sub-image" />
              <p>{article.content34}</p>
              <p>{article.content35}</p>
              <p>{article.content36}</p>
              <p className='article-sub-title'>{article.content37}</p>
              <p>{article.content38}</p>
              <p>{article.content39}</p>
              <p>{article.content40}</p>
              <p>{article.content41}</p>
              <p>{article.content42}</p>
              <p>{article.content43}</p>
              <p>{article.content44}</p>
              <p>{article.content45}</p>
              <p>{article.content46}</p>
              <p>{article.content47}</p>
          </>
        ) : (
            <>
                <p>{article.content}</p>
                <p>{article.content2}</p>
                <p>{article.content3}</p>
                <p>{article.content4}</p>
                <p>{article.content5}</p>
                <p>{article.content6}</p>
                <p>{article.content7}</p>
                <p>{article.content8}</p>
                <p>{article.content9}</p>
                <p>{article.content10}</p>
                <p>{article.content11}</p>
                </>
            )}
                <div className="author">{article.author}</div>
            </div>
        </div>
    );
};

export default ArticleDetail;
