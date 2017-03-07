import {Component} from 'react';
import {Link} from 'react-router';
import images from './images';

export default class OurWorkItems extends Component {
  render() {
    return (
      <div className='container'>
        <div className='ourwork-item'>
          <h2 className='middle-title'> 我们的工作</h2>
          <p className='middle-describe'> 众爱在全种食品范围内支持个人救助的同时也与其它慈善机构合作救助</p>
        </div>

        <div className='job-icons row'>
          <div className='col-md-2 col-xs-6 icon-container a-work-icon col-md-offset-1'>
            <div className='job-icons-container'>
              <img src={images.iconDisater} alt='白血病救助'/>
            </div>
            <p className='middle-describe'>白血病救助</p>
          </div>
          <div className='col-md-2 col-xs-6 icon-container'>
            <div className='job-icons-container'>
              <img src={images.iconMedical} alt='医疗救助'/>
            </div>
            <p className='middle-describe'>医疗救助</p>
          </div>
          <div className='col-md-2 col-xs-6 icon-container'>
            <div className='job-icons-container'>
              <img src={images.iconEducation} alt='教育资助'/>
            </div>
            <p className='middle-describe'>教育资助</p>
          </div>
          <div className='col-md-2 col-xs-6 icon-container'>
            <div className='job-icons-container'>
              <img src={images.iconLeukemia} alt='灾区救助'/>
            </div>
            <p className='middle-describe'>灾区救助</p>
          </div>
          <div className='col-md-2 col-xs-6 icon-container'>
            <div className='job-icons-container'>
              <img src={images.iconCommunity} alt='社区帮扶'/>
            </div>
            <p className='middle-describe'>社区帮扶</p>
          </div>
        </div>

        <div className='ourwork-know-more'>
          <Link to='/tw-ra/ourWork' className='know-more-text'>了解更多 ></Link>
        </div>
      </div>
    );
  }
}
