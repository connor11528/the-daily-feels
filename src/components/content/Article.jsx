import React, { PropTypes } from 'react';
import '../../styles/article.scss';

/*  let dominantStyle = {

}  */

const Article = ({ article }) => {
  const dominantToneShadowObj = {
    anger: 'red',
    disgust: 'green',
    fear: '#6600CC',
    joy: '#FF00FF',
    sadness: '#0099FF',
  };


  let dominantTone = {
    backgroundColor: 'white',
  };

  dominantTone = {
    boxShadow: 'inset 0 0 10px red'
  }
  if(article.dominantTone === 'disgust'){
    dominantTone = {
      boxShadow: '3px 3px 7px 3px #999, inset 0px 0px 10px green',
    }
  }
  if(article.dominantTone === 'fear'){
    dominantTone = {
      boxShadow: '3px 3px 7px 3px #999, inset 0px 0px 10px #6600cc',
    }
  }
  if(article.dominantTone === 'joy'){
    dominantTone = {
      boxShadow: '3px 3px 7px 3px #999, inset 0px 0px 10px #ff00ff',
    }
  }
  if(article.dominantTone === 'sadness'){
    dominantTone = {
      boxShadow: '3px 3px 7px 3px #999, inset 0px 0px 10px #0099ff',
    }
  }


  return (
    <div className="article">
      <a href={article.url} target="_blank" className="flip-container">
        <div className="flipper">
          <div className="front" style={dominantTone} >
            <div className="articleTitle">{article.title}</div>
            <div className="articleSnippet">{`${article.snippet} ... `}</div>
          </div>
          <div className="back" style = {dominantTone}>

            <p className="articleEmotionRow anger">
              anger: {(article.tone[0].std.toFixed(1))}
            </p>
            <p className="articleEmotionRow disgust">
              disgust: {(article.tone[1].std.toFixed(1))}
            </p>
            <p className="articleEmotionRow fear">
              fear: {(article.tone[2].std.toFixed(1))}
            </p>
            <p className="articleEmotionRow joy">
              joy: {(article.tone[3].std.toFixed(1))}
            </p>
            <p className="articleEmotionRow sadness">
              sadness: {(article.tone[4].std.toFixed(1))}
            </p>

          </div>
        </div>
      </a>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
