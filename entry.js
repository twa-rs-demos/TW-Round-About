import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './public/components/Home';
import App from './public/containers/App';

const router = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("page")
);
