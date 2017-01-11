import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {Provider, connect} from 'react-redux';
import createLogger from 'redux-logger';
import Layout from './containers/layout/layout';
import Home from './components/home/index';
import Donate from './components/donate/index';
import DonateCurrentAppeals from './components/donate-current-appeals/index';
import OurWork from './components/our-work/index';
import LeukemiaAssistance from './components/leukemia-assistance/index';
import Volunteer from './components/volunteer/index';
import GetInvolved from './components/get-involved/index';
import SearchResult from './components/result/SearchResult';
import ChildStory from './components/child-story/index';
import NewsLetter from './components/result/NewsLetter';
import NewAndEvent from './components/news-and-event/index';
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

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);
class Main extends Component {

  render() {
    return ( <Router history={browserHistory}>
      <Route path={URI_PREFIX} component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>

        <Route path="donate">
          <IndexRoute component={Donate}/>
          <Route path="donatecurrent" component={DonateCurrentAppeals}/>
        </Route>

        <Route path="ourwork">
          <IndexRoute component={OurWork}/>
          <Route path="leukemiaassistance">
            <IndexRoute component={LeukemiaAssistance}/>
            <Route path="leukemiastories" component={LeukemiaStories}/>
          </Route>
          <Route path="medicalassistance" component={MedicalAssistance}/>
          <Route path="educationsupport" component={EducationSupport}/>
          <Route path="disasterrelief" component={DisasterRelief}/>
          <Route path="communityassistance" component={CommunityAssistance}/>
          <Route path="gallery" component={Gallery}/>
        </Route>

        <Route path="getinvolved">
          <IndexRoute component={GetInvolved}/>
          <Route path="volunteer" component={Volunteer}/>
          <Route path="communitycenter" component={CommunityCenter}/>
          <Route path="classifieds" component={Classifieds}/>
          <Route path="directory" component={Directory}/>
        </Route>

        <Route path="newsandevent">
          <IndexRoute component={NewAndEvent}/>
          <Route path="newslettercenter" component={NewsLetter}/>
          <Route path="bookfairs">
            <IndexRoute component={BookFairs}/>
            <Route path="article" component={Article}/>
          </Route>
          <Route path="calendar" component={Calendar}/>
        </Route>

        <Route path="aboutus">
          <IndexRoute component={AboutUs}/>
          <Route path="people" component={People}/>
          <Route path="partners">
            <IndexRoute component={Partners}/>
            <Route path="partnerstories" component={PartnerStories}/>
          </Route>
          <Route path="foundingstory" component={FoundingStory}/>
          <Route path="press" component={Press}/>
          <Route path="contactus" component={ContactUs}/>
        </Route>


        <Route path="store" component={Store}>
          <IndexRoute component={Store}/>
        </Route>

        <Route path="childstory" component={ChildStory}/>
        <Route path="legal" component={Legal}/>
        <Route path="privacypolicy" component={PrivacyPolicy}/>
        <Route path="searchresult" component={SearchResult}/>

      </Route>
    </Router>);
  }
}
const mapStateToProps = (state) => state;

let RootApp = connect(mapStateToProps)(Main);

render(
  <Provider store={store}>
    <RootApp/>
  </Provider>,
  document.getElementById('page'));
