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
import SearchResult from './components/result/SearchResult';
import ChildStory from './components/child-story/index';
import NewsLetter from './components/result/NewsLetter';
import NewAndEvent from './components/new-and-event/index';
import Classifieds from './components/classifieds/index';
import Directory from './components/directory/index';
import CommunityCenter from './components/community-center/index';
import MedicalAssistance from './components/medical-assistance/index';
import EducationSupport from './components/education-support/index';
import DisasterRelief from './components/disaster-relief/index'
import CommunityAssistance from './components/community-assitance/index';
import Legal from './components/legal';
import PrivacyPolicy from './components/privacy-policy';
import Store from './components/store/index';
import AboutUs from './components/about-us/index';
import LeukemiaStories from './components/leukemia-stories';
import BookFairs from './components/book-market';
import Calendar from './components/calendar';
import People from './components/people';
import Partners from  './components/partners';
import Press from './components/press';
import ContactUs from './components/contact-us';
import Gallery from './components/gallery';
import Article from './components/article';
import PartnerStories from './components/partner-stories';
import FoundingStory from  './components/founding-story';

render(
  <Router history={browserHistory}>
    <Route path={URI_PREFIX} component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>

      <Route path="donate" component={Donate}>
        <IndexRoute component={Donate}/>
        <Route path="donate-current" component={DonateCurrentAppeals}/>
      </Route>

      <Route path="ourwork" component={OurWork}>
        <IndexRoute component={OurWork}/>
        <Route path="leukemia-assistance" component={LeukemiaAssistance}>
          <IndexRoute component={LeukemiaAssistance}/>
          <Route path="leukemia-stories" component={LeukemiaStories}/>
        </Route>
        <Route path="medical-assistance" component={MedicalAssistance}/>
        <Route path="education-support" component={EducationSupport}/>
        <Route path="disaster-relief" component={DisasterRelief}/>
        <Route path="community-assistance" component={CommunityAssistance}/>
        <Route path="gallery" component={Gallery}/>
      </Route>


      <Route path="get-involved" component={GetInvolved}>
        <IndexRoute component={GetInvolved}/>
        <Route path="volunteer" component={Volunteer}/>
        <Route path="community-center" component={CommunityCenter}/>
        <Route path="classifieds" component={Classifieds}/>
        <Route path="directory" component={Directory}/>
      </Route>

      <Route path="news-and-event" component={NewAndEvent}>
        <IndexRoute component={NewAndEvent}/>
        <Route path="news-letter-center" component={NewsLetter}/>
        <Route path="book-fairs" component={BookFairs}>
          <IndexRoute component={BookFairs}/>
          <Route path="article" component={Article}/>
        </Route>
        <Route path="calendar" component={Calendar}/>
      </Route>

      <Route path="about-us" component={AboutUs}>
        <IndexRoute component={AboutUs}/>
        <Route path="people" component={People}/>
        <Route path="partners" component={Partners}>
          <IndexRoute component={Partners}/>
          <Route path="partner-stories" component={PartnerStories}/>
        </Route>
        <Route path="founding-story" component={FoundingStory}/>
        <Route path="press" component={Press}/>
        <Route path="contact-us" component={ContactUs}/>
      </Route>


      <Route path="store" component={Store}>
        <IndexRoute component={Store}/>
      </Route>

      <Route path="child-story" component={ChildStory}/>
      <Route path="legal" component={Legal}/>
      <Route path="privacy-policy" component={PrivacyPolicy}/>
      <Route path="search-result" component={SearchResult}/>

    </Route>
  </Router>,
  document.getElementById("page")
);
