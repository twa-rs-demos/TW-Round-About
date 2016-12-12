import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './public/components/Layout/Index';
import App from './public/containers/App';
import Home from './public/components/home/Index';
import Donate from './public/components/donate/Index';
import DonateCurrentAppeals from './public/components/donateCurrentAppeals/Index';
import OurWork from "./public/components/ourWork/Index";
import OurWorkAssistance from "./public/components/ourWorkAssistance/Index";
import GetInvolvedVolunteer from "./public/components/getInvolvedVolunteer/Index";
import GetInvolved from "./public/components/getInvolved/Index";

render(
  <Router history={browserHistory}>
    <Route path="/tw-ra" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="donate" component={Donate}/>
      <Route path="donateCurrent" component={DonateCurrentAppeals}/>
      <Route path="ourWorkPage" component={OurWorkAssistance}/>
      <Route path="ourWork" component={OurWork}/>
      <Route path="getInvolvedVolunteer" component={GetInvolvedVolunteer}/>
      <Route path="getInvolved" component={GetInvolved}/>
    </Route>
  </Router>,
  document.getElementById("page")
);
