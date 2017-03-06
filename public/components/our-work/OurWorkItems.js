import {Component} from 'react';
import {Link} from 'react-router';

export default class ourWorkItems extends Component {
  render() {
    return (
      <div className='container'>
        <div className='middle-text'>
          <h3 className='middle-title'> 我们都做什么</h3>
        </div>
        <div>
          <div className='job-icons row icons-margin-bottom'>
            <div className='col-md-4 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_leukemia assistance_bg.png' alt='白血病救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/leukemiaassistance'}>白血病救助</Link>
            </div>
            <div className='col-md-4 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_disaster relief_bg.png' alt='医疗救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/medicalassistance'}>医疗救助</Link>
            </div>
            <div className='col-md-4 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_education support_bg.png' alt='教育资助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/educationsupport'}>教育资助</Link>
            </div>
          </div>
          <div className='job-icons row icons-margin-bottom'>
            <div className='col-md-6 col-xs-12 col-md-offset-1 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_medical assistance_bg.png' alt='灾区救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/disasterrelief'}>灾区救助</Link>
            </div>
            <div className='col-md-2 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src='http://localhost/tw-ra/public/images/ourWork/icon_community assistance_bg.png' alt='社区帮扶'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/communityassistance'}>社区帮扶</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
