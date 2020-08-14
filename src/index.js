import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Todo from './pages/todo/Todo'
import Sobre from './pages/about/Sobre'

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={Todo}/>
        <Route path="/todos" component={Todo} />
        <Route path="/sobre" component={Sobre} />
        <Route path="*" render={() => (<Redirect to="/todos" />)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);