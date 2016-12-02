import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './public/components/Home';
import Donate from './public/components/Donate';
import App from './public/containers/App';
import DonateCurrentAppeal from './public/components/DonateCurrentAppeal';
import OurWorkPage from "./public/components/OurWorkAssistance";
import GetInvolved from "./public/components/GetInvolved";

const router = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="donate" component={Donate}/>

    <Route path="donatecurrent" component={DonateCurrentAppeal}/>

    <Route path="ourWorkPage" component={OurWorkPage}/>
    <Route path="getInvolved" component={GetInvolved}/>


  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("page")
);
