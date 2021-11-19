import React from 'react';
import './App.css';
import ScreenHome from './ScreenHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScreenMyArticles from './ScreenMyArticles';
import ScreenSource from './ScreenSource';
import ScreenArticlesBySource from './ScreenArticlesBySource';
import articles from './reducers/article.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import token from './reducers/token.reducer';


const store = createStore(combineReducers({articles, token}));

function App() {


  
  return (
    <Provider store={store}>
    <Router>
       <Switch>
         
         <Route exact path="/" component={ScreenHome} />
         <Route exact path="/screenmyarticles" component={ScreenMyArticles} />
         <Route exact path="/screenarticlesbysource/:id" component={ScreenArticlesBySource}  />
         <Route exact path="/screensource" component={ScreenSource}  />
       </Switch>
     </Router>
     </Provider>
  );
}

export default App;
