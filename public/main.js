import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './components/menu/Layout';
import Donate from './components/donate/Index';
import Home from './components/home/Index';

render(
  <Router history={browserHistory}>
    <Route path='/tw-ra/' component={Layout}>
      <IndexRoute component={Home}/>
      <Route path='donate' component={Donate}/>
    </Route>
  </Router>,
  document.getElementById('page')
);
