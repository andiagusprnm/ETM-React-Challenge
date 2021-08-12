import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Col, Row, Card, Button, CardTitle, Input,
  CardText, Container, FormGroup, Form
} from 'reactstrap';
import Header from '../components/Header';
import { URL } from '../constant';


import { IResponseFetch, IArticles, TSearch } from '../interfaces/interfaces';


const Article: React.FC = () => {
  const route = useHistory();
  const [search, setSearch] = useState<TSearch>('');
  const [articles, setArticles]  = useState<IResponseFetch>();

  const getArticles = async (q = 'bitcoin') => {
    try {
      const fetchResult = await fetch(`${URL}${q}`);
      const result = await fetchResult.json();
      setArticles(result);  
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(search);
  }

  const onSubmitSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    getArticles(search);
  }

  const onClickDetail = (detailArticle: IArticles, index: number) => {
    route.push(`/article/${index}`, detailArticle);
  }
  
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Header>
        <Form onSubmit={ onSubmitSearch } className="ms-3">
          <FormGroup>
            <Input type="text" value={ search } onChange={ onChangeInput } placeholder="search articles ..." />
          </FormGroup>
        </Form>
      </Header>
      <Container>
        <Row>
          { articles?.articles.map((article, i) => (
            <Col sm="6" className="mt-3" key={ i }>
              <Card body>
                <CardTitle>{ article.title }</CardTitle>
                <CardText>Author: { article.author }</CardText>
                <CardText>Source Name: { article.source.name }</CardText>
                <Button onClick={ () => onClickDetail(article, i) }>More Details</Button>
              </Card>
            </Col>
          ))
        }
        </Row>
      </Container>
    </div>
  );
}

export default Article;
