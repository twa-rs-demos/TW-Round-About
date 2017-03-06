import {Component} from 'react';
import images from '../images';

export default class FooterTopOne extends Component {
  render() {
    return (
      <div>
        <div className='footer-head-text'>
          <img src={images.smallLogo}/>
          <span className='information-theme'>Roundabout</span>
        </div>
        <div className='roundabout-info'>
          <p>
            Roundabout is a social enterprise headed by volunteers. We
            provide a free service connecting those who wish to give,be
            that monetary or otherwise, to those in need.
          </p>
          <div className='footer-list'>
            <div>
              <img src={images.iconAddressWhite}/>
              <p className='follow-icon'> Address:Yuyang Road West, Off An Hua Road (Behind<br/> Yosemite Villa
                Compound),
                Shunyi District.</p>
            </div>
            <div>
              <img src={images.iconTimeWhite}/>
              <p className='follow-icon'> Open Time: Mon-Sat 9.30am-5.30pm</p>
            </div>
            <div>
              <img src={images.iconPhoneWhite}/>
              <p className='follow-icon'> Mobile Phone:137 1877 7761 (English), 137 1805 3814<br/>
                (Chinese only)</p>
            </div>
            <div>
              <img src={images.iconMailWhite}/>
              <p className='follow-icon'> Email: <span
                className='email-text'>roundaboutvolunteer@yahoo.co.uk</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
