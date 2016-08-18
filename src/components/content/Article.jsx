import React, { PropTypes } from 'react';
import '../../styles/article.scss';


const Article = ({ article }) =>
  <div className="article">
    <a
      href={article.url} target="_blank"
      className="flip-container"
    >
    {/* ontouchstart="this.classList.toggle('hover');" */}
      <div className="flipper">
        <div className="front">
          <div className="articleTitle">{article.title}</div>
          <div className="articleSnippet">{`${article.snippet} ... `}</div>
        </div>
        <div className="back">
          <p className="articleEmotionRow anger">
            anger: {(article.tone[0].score * 100).toFixed(1)}%
          </p>
          <p className="articleEmotionRow disgust">
            disgust: {(article.tone[1].score * 100).toFixed(1)}%
          </p>
          <p className="articleEmotionRow fear">
            fear: {(article.tone[2].score).toFixed(1)}%
          </p>
          <p className="articleEmotionRow joy">
            joy: {(article.tone[3].score).toFixed(1)}%
          </p>
          <p className="articleEmotionRow sadness">
            sadness: {(article.tone[4].score).toFixed(1)}%
          </p>
        </div>
      </div>
    </a>
  </div>;

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
