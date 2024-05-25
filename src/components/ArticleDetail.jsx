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
                <div className="author">{article.author}</div>
            </div>
        </div>
    );
};

export default ArticleDetail;
