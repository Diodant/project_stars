import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import articles from '../components/articles';

const ArticleList = () => {
    const articleListRef = useRef(null);

    useEffect(() => {
        if (articleListRef.current) {
            articleListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const renderArticles = () => {
        return articles.map((article, index) => (
            <div key={article.id} className="article-item">
                <Link to={`/articles/${article.id}`}>
                    <p className="date">{article.date}</p>
                    <h2>{article.title}</h2>
                    <p>{truncateText(article.excerpt, 260)}</p>
                    <p className="author">{article.author}</p>
                </Link>
            </div>
        ));
    };

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
            <div ref={articleListRef} className="article-list">
                <h2 className="title text-center">Статьи</h2>
                <div className="article-grid">
                    {renderArticles()}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;
