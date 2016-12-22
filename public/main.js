import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import Donate from './components/donate';
import DonateCurrentAppeals from './components/donate-current-appeals';
import OurWork from './components/our-work';
import LeukemiaAssistance from './components/leukemia-assistance';
import Volunteer from './components/Volunteer';
import GetInvolved from './components/get-involved';
import SearchResult from './components/result/SearchResult';
import ChildStory from './components/child-story';
import NewsLetter from './components/result/NewsLetter';
import NewAndEvent from './components/new-and-event';
import Classifieds from './components/classifieds';
import Directory from './components/directory';
import CommunityCenter from './components/community-center';
import MedicalAssistance from './components/medical-assistance';
import EducationSupport from './components/education-support';
import DisasterRelief from './components/disaster-relief'
import CommunityAssistance from './components/community-assitance';
import Legal from './components/legal';
import PrivacyPolicy from './components/privacy-policy';
import Store from './components/store';
import AboutUs from './components/about-us';
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
