import { Route, Switch } from 'react-router-dom';
import Article from './pages/Article';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <Switch>
      <Route path="/article/:id" component={ ArticleDetail } />
      <Route path="/" component={ Article } />
    </Switch>
  );
}

export default App;
