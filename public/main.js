import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/layout/index';
import Home from './components/home/index';
import Donate from './components/donate/index';
import DonateCurrentAppeals from './components/donate-current-appeals/index';
import OurWork from './components/our-work/index';
import LeukemiaAssistance from './components/leukemia-assistance/index';
import Volunteer from './components/Volunteer/index';
import GetInvolved from './components/get-involved/index';
import SearchResult from '../public/components/result/SearchResult';
import ChildStory from './components/child-story/index';
import NewsLetter from '../public/components/result/NewsLetter';
import NewAndEvent from './components/new-and-event/index';
import Classifieds from './components/classifieds/index';
import Directory from './components/directory/index';
import CommunityCenter from './components/community-center/index';
import MedicalAssistance from './components/medical-assistance/index';
import EducationSupport from './components/education-support/index';
import DisasterRelief from './components/disaster-relief/index'
import CommunityAssistance from './components/community-assitance/index';
import Legal from '../public/components/legal';
import PrivacyPolicy from '../public/components/privacy-policy';
import Store from './components/store/index';
import AboutUs from './components/about-us/index';
import LeukemiaStories from '../public/components/leukemia-stories';
import BookFairs from '../public/components/book-market';
import Calendar from '../public/components/calendar';
import People from '../public/components/people';
import Partners from  '../public/components/partners';
import Press from '../public/components/press';
import ContactUs from '../public/components/contact-us';
import Gallery from '../public/components/gallery';
import Article from '../public/components/article';
import PartnerStories from '../public/components/partner-stories';

render(
  <Router history={browserHistory}>
    <Route path={URI_PREFIX} component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>

      <Route path="donate" component={Donate}>
        <IndexRoute component={Donate}/>
        <Route path="donateCurrent" component={DonateCurrentAppeals}/>
      </Route>

      <Route path="ourWork" component={OurWork}>
        <IndexRoute component={OurWork}/>
        <Route path="leukemiaAssistance" component={LeukemiaAssistance}>
          <IndexRoute component={LeukemiaAssistance}/>
          <Route path="leukemia-stories" component={LeukemiaStories}/>
        </Route>
        <Route path="medicalAssistance" component={MedicalAssistance}/>
        <Route path="educationSupport" component={EducationSupport}/>
        <Route path="disasterRelief" component={DisasterRelief}/>
        <Route path="communityAssistance" component={CommunityAssistance}/>
        <Route path="gallery" component={Gallery}/>
      </Route>


      <Route path="getInvolved" component={GetInvolved}>
        <IndexRoute component={GetInvolved}/>
        <Route path="volunteer" component={Volunteer}/>
        <Route path="communityCenter" component={CommunityCenter}/>
        <Route path="classifieds" component={Classifieds}/>
        <Route path="directory" component={Directory}/>
      </Route>

      <Route path="newsAndEvent" component={NewAndEvent}>
        <IndexRoute component={NewAndEvent}/>
        <Route path="newsLetterCenter" component={NewsLetter}/>
        <Route path="bookFairs" component={BookFairs}>
          <IndexRoute component={BookFairs}/>
          <Route path="article" component={Article}/>
        </Route>
        <Route path="calendar" component={Calendar}/>
      </Route>

      <Route path="aboutUs" component={AboutUs}>
        <IndexRoute component={AboutUs}/>
        <Route path="people" component={People}/>
        <Route path="partners" component={Partners}>
          <IndexRoute component={Partners}/>
          <Route path="partnerStories" component={PartnerStories}/>
        </Route>
        <Route path="press" component={Press}/>
        <Route path="contactUs" component={ContactUs}/>
      </Route>


      <Route path="store" component={Store}>
        <IndexRoute component={Store}/>
      </Route>

      <Route path="childStory" component={ChildStory}/>
      <Route path="legal" component={Legal}/>
      <Route path="privacy-policy" component={PrivacyPolicy}/>
      <Route path="searchResult" component={SearchResult}/>

    </Route>
  </Router>,
  document.getElementById("page")
);
