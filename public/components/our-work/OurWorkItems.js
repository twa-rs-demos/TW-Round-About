import {Component} from 'react';
import {Link} from 'react-router';
import images from './images';

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
                <img src={images.iconLeukemia} alt='白血病救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/leukemiaassistance'}>白血病救助</Link>
            </div>
            <div className='col-md-4 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src={images.iconDisaster} alt='医疗救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/medicalassistance'}>医疗救助</Link>
            </div>
            <div className='col-md-4 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src={images.iconEducation} alt='教育资助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/educationsupport'}>教育资助</Link>
            </div>
          </div>
          <div className='job-icons row icons-margin-bottom'>
            <div className='col-md-6 col-xs-12 col-md-offset-1 icon-container'>
              <div className='job-icons-container'>
                <img src={images.iconMedical} alt='灾区救助'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/disasterrelief'}>灾区救助</Link>
            </div>
            <div className='col-md-2 col-xs-12 icon-container'>
              <div className='job-icons-container'>
                <img src={images.icon_Community} alt='社区帮扶'/>
              </div>
              <Link to={URI_PREFIX + '/ourwork/communityassistance'}>社区帮扶</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
