import {Component} from 'react';
import {Link} from 'react-router';

export default class ourWorkItems extends Component {
  render() {
    return (
      <div>
        <div className='middle-text introduction'>
          <p> 我们都做什么</p>
        </div>
        <div>
          <div className='job-icons row col-sm-offset-1'>
            <div className='col-md-2 icon-container'>
              <div className='job-icons-container'>
                <img src='./public/images/ourWork/icon_leukemia assistance_bg.png' alt='白血病救助'/>
              </div>
              <Link to={URI_PREFIX + '/leukemiaAssistance'}>白血病救助</Link>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-2 icon-container'>
              <div className='job-icons-container'>
                <img src='./public/images/ourWork/icon_disaster relief_bg.png' alt='医疗救助'/>
              </div>
              <Link to={URI_PREFIX + '/medicalAssistance'}>医疗救助</Link>
            </div>
            <div className='col-md-2 icon-container'></div>
            <div className='col-md-2 icon-container'>
              <div className='job-icons-container'>
                <img src='./public/images/ourWork/icon_education support_bg.png' alt='教育资助'/>
              </div>
              <Link to={URI_PREFIX + '/educationSupport'}>教育资助</Link>
            </div>
            <div className='col-md-2 icon-container'></div>
          </div>
          <div className='row job-icons col-sm-offset-3 ourwork-job-icons'>
            <div className='col-md-2 icon-container'>
              <div className='job-icons-container'>
                <img src='./public/images/ourWork/icon_medical assistance_bg.png' alt='灾区救助'/>
              </div>
              <Link to={URI_PREFIX + '/disasterRelief'}>灾区救助</Link>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-3 icon-container icon-community'>
              <div className='job-icons-container'>
                <img src='./public/images/ourWork/icon_community assistance_bg.png' alt='社区帮扶'/>
              </div>
              <Link to={URI_PREFIX + '/communityAssistance'}>社区帮扶</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
