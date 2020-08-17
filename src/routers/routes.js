import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Todo from '../pages/todo/Todo'
import Sobre from '../pages/about/Sobre'

const Routes = () => (
    <Router>
      <Switch>
          <Route exact path="/" component={Todo}/>
          <Route path="/todos" component={Todo} />
          <Route path="/sobre" component={Sobre} />
          <Route path="*" render={() => (<Redirect to="/todos" />)} />
      </Switch>
    </Router>
)

export default Routes;