import React from 'react'
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import Header from '../components/Header';
import { IArticles } from '../interfaces/interfaces';

const ArticleDetail: React.FC = () => {
  const { state: article } = useLocation<IArticles>();

  const convertDate = (date: string): string => {
    const convert = new Date(date).toLocaleDateString();
    return convert;
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col className="mt-3">
            <h3>{ article.title }</h3>
            <p>Author: { article.author }</p>
            <p>Source: { article.source.name }</p>
            <p>Published: { convertDate(article.publishedAt) }</p>
            <img src={ article.urlToImage } className="img-fluid" alt="pict-article" />
            <p><a href={ article.url } target="_blank" rel="noopener noreferrer">{ article.url}</a></p>
            <p>{ article.content }</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ArticleDetail
