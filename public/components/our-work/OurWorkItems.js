import {Component} from 'react';
import {Link} from 'react-router';

export default class ourWorkItems extends Component {
  render() {
    return (
      <div>
        <div className="middle-text">
          <h3 className="middle-title"> 我们都做什么</h3>
        </div>
        <div>
          <div className='job-icons row col-xs-offset-1'>
            <div className='col-xs-2 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_leukemia assistance_bg.png' alt='白血病救助'/>
              </div>
              <Link to={URI_PREFIX + '/leukemiaAssistance'}>白血病救助</Link>
            </div>
            <div className='col-xs-2'></div>
            <div className='col-xs-2 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_disaster relief_bg.png' alt='医疗救助'/>
              </div>
              <Link to={URI_PREFIX + '/medicalAssistance'}>医疗救助</Link>
            </div>
            <div className='col-xs-2 icon-container'></div>
            <div className='col-xs-2 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_education support_bg.png' alt='教育资助'/>
              </div>
              <Link to={URI_PREFIX + '/educationSupport'}>教育资助</Link>
            </div>
            <div className='col-xs-2 icon-container'></div>
          </div>
          <div className='row job-icons col-xs-offset-3 ourwork-job-icons'>
            <div className='col-xs-2 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_medical assistance_bg.png' alt='灾区救助'/>
              </div>
              <Link to={URI_PREFIX + '/disasterRelief'}>灾区救助</Link>
            </div>
            <div className='col-xs-2'></div>
            <div className='col-xs-3 icon-container icon-community'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_community assistance_bg.png' alt='社区帮扶'/>
              </div>
              <Link to={URI_PREFIX + '/communityAssistance'}>社区帮扶</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
