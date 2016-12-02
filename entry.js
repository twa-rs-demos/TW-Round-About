import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './public/components/Home';
import Donate from './public/components/Donate';
import App from './public/containers/App';
import DonateCurrentAppeal from './public/components/DonateCurrentAppeal';
import OurWork from "./public/components/OurWork";
import OurWorkAssistance from "./public/components/OurWorkAssistance";
import GetInvolvedVolunteer from "./public/components/GetInvolvedVolunteer";
import GetInvolved from "./public/components/GetInvolved";

const router = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="donate" component={Donate}/>
    <Route path="donateCurrent" component={DonateCurrentAppeal}/>
    <Route path="ourWorkPage" component={OurWorkAssistance}/>
    <Route path="ourWork" component={OurWork}/>
    <Route path="getInvolvedVolunteer" component={GetInvolvedVolunteer}/>
    <Route path="getInvolved" component={GetInvolved}/>

  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("page")
);
