import {Component} from 'react';
import {MaxPicture} from '../common/index';
import SameFamily from './SameFamily';
import BecomePartners from './BecomeParters';

export default class Partners extends Component {

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/partners/hero_partner.png';
    return (
      <div id='partners'>
        <div className='max-picture'>
          <MaxPicture src={pictureSrc}>
            <div className='content-on-picture'>
              <h3 className='title'>
                SANTA FE SUPPRTS<br/>
                CHILDHOOD EDUCATION EQUALITY
              </h3>
              <p className='statement'>Roundabout is a social enterprise headed by volunteers. We provide a free service
                connecting those who
                wish to give, be </p>
              <div className='text-right'>
                <button className='read-more'>阅读更多</button>
              </div>
            </div>
          </MaxPicture>
        </div>
        <div className='main-content'>
          <div className='more-stories text-right'>
            <a href='#'>更多合作伙伴故事 ></a>
          </div>
          <div className='row same-family'>
            <div className='col-sm-offset-3 col-sm-6 no-padding'>
              <SameFamily/>
            </div>
          </div>
          <div className='row become-partner'>
            <div className='col-sm-offset-3 col-sm-6 no-padding'>
              <BecomePartners/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
