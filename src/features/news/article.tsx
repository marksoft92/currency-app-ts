import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs';
import { selectSelectedArticle } from './newsSlice';


const Article: React.FC = () => {
  const selectedArticle = useSelector(selectSelectedArticle);

  if (!selectedArticle) {
    return <div>Nie wybrano artykułu.</div>;
  }

  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source: { name },
    author,
    content,
  } = selectedArticle;

  return (
<>
<Breadcrumbs/>
<div className="article-container">
      <h2>{title}</h2>
      <p><FormattedMessage id="descriptionColumn"/> {description || 'Brak informacji o opisie'}</p>
      <p><FormattedMessage id="popup.source"/> {name || 'Brak informacji o źródle'}</p>
      <p><FormattedMessage id="popup.author"/> {author || 'Brak informacji o autorze'}</p>
      <p><FormattedMessage id="publishedAtColumn"/> {publishedAt || 'Brak informacji o dacie publikacji'}</p>
      {urlToImage && (
        <div className="image-container">
          <img src={urlToImage} alt="Zdjęcie artykułu" />
        </div>
      )}
      {content && <p>{content}</p>}
      {url && (
        <div className="link-container">
          <a href={url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="link"/>
          </a>
        </div>
      )}
    </div>
</>
  );
};

export default Article;
