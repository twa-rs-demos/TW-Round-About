import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from '../public/components/layout/Index';
import Home from '../public/components/home/Index';
import Donate from '../public/components/donate/Index';
import DonateCurrentAppeals from '../public/components/donateCurrentAppeals/Index';
import OurWork from "../public/components/ourWork/Index";
import OurWorkAssistance from "../public/components/ourWorkAssistance/Index";
import Volunteer from "../public/components/Volunteer/Index";
import GetInvolved from "../public/components/getInvolved/Index";
import SearchResult from '../public/components/result/SearchResult';
import NewsLetter from '../public/components/result/NewsLetter';
import NewAndEvent from '../public/components/newAndEvent/NewAndEvent';
import Classifieds from '../public/components/classifieds/Classifieds';
import Directory from '../public/components/directory/Directory';
import CommunityCenter from '../public/components/community-center/CommunityCenter';

render(
  <Router history={browserHistory}>
    <Route path={URI_PREFIX} component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="donate" component={Donate}/>
      <Route path="donateCurrent" component={DonateCurrentAppeals}/>
      <Route path="ourWorkPage" component={OurWorkAssistance}/>
      <Route path="ourWork" component={OurWork}/>
      <Route path="volunteer" component={Volunteer}/>
      <Route path="getInvolved" component={GetInvolved}/>
      <Route path="searchResult" component={SearchResult}/>
      <Route path="newsLetter-center" component={NewsLetter}/>
      <Route path="newsLetter-signUp" component={NewsLetter}/>
      <Route path="newAndEvent" component={NewAndEvent}/>
      <Route path="classifieds" component={Classifieds}/>
      <Route path="directory" component={Directory}/>
      <Route path="communityCenter" component={CommunityCenter}/>
    </Route>
  </Router>,
  document.getElementById("page")
);
