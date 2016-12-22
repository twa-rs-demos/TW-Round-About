import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from '../public/components/layout/Index';
import Home from '../public/components/home/Index';
import Donate from '../public/components/donate/Index';
import DonateCurrentAppeals from '../public/components/donateCurrentAppeals/Index';
import OurWork from "../public/components/ourWork/Index";
import LeukemiaAssistance from "../public/components/leukemia-assistance/Index";
import Volunteer from "../public/components/Volunteer/Index";
import GetInvolved from "../public/components/getInvolved/Index";
import SearchResult from '../public/components/result/SearchResult';
import ChildStory from '../public/components/childStory/index';
import NewsLetter from '../public/components/result/NewsLetter';
import NewAndEvent from '../public/components/newAndEvent/NewAndEvent';
import Classifieds from '../public/components/classifieds/Classifieds';
import Directory from '../public/components/directory/Directory';
import CommunityCenter from '../public/components/community-center/CommunityCenter';
import MedicalAssistance from '../public/components/medical-assistance/MedicalAssistance';
import EducationSupport from '../public/components/education-support/EducationSupport';
import DisasterRelief from '../public/components/disaster-relief/DisasterRelief'
import CommunityAssistance from '../public/components/community-assitance/CommunityAssitance';
import Legal from '../public/components/legal';
import PrivacyPolicy from '../public/components/privacyPolicy';
import Store from './components/store/RounaboutStore';
import AboutUs from './components/about-us/AboutUs';
import JoinUs from './components/join-us/JoinUs';
import LeukemiaStories from '../public/components/leukemia-stories';

render(
  <Router history={browserHistory}>
    <Route path={URI_PREFIX} component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="donate" component={Donate}/>
      <Route path="donateCurrent" component={DonateCurrentAppeals}/>
      <Route path="childStory" component={ChildStory}/>
      <Route path="ourWork" component={OurWork}/>
      <Route path="leukemiaAssistance" component={LeukemiaAssistance}/>
      <Route path="medicalAssistance" component={MedicalAssistance}/>
      <Route path="educationSupport" component={EducationSupport}/>
      <Route path="disasterRelief" component={DisasterRelief}/>
      <Route path="communityAssistance" component={CommunityAssistance}/>
      <Route path="volunteer" component={Volunteer}/>
      <Route path="getInvolved" component={GetInvolved}/>
      <Route path="searchResult" component={SearchResult}/>
      <Route path="newsLetterCenter" component={NewsLetter}/>
      <Route path="newsLetter-signUp" component={NewsLetter}/>
      <Route path="newAndEvent" component={NewAndEvent}/>
      <Route path="classifieds" component={Classifieds}/>
      <Route path="directory" component={Directory}/>
      <Route path="communityCenter" component={CommunityCenter}/>
      <Route path="legal" component={Legal}/>
      <Route path="privacy-policy" component={PrivacyPolicy}/>
      <Route path="store" component={Store}/>
      <Route path="joinUs" component={JoinUs}/>
      <Route path="aboutUs" component={AboutUs}/>

      <Route path="leukemia-stories" component={LeukemiaStories}/>
    </Route>
  </Router>,
  document.getElementById("page")
);
