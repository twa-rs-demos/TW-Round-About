import {Component} from 'react';
import pictureDate from '../pictureDate';

export default class FooterTopFour extends Component {
  render() {
    return (
      <div className='col-md-offset-1 col-md-10 col-xs-12 no-padding icon-imgs'>
        <div className='icon-img'>
          <img src={pictureDate.taobaoStore}/>
          <p>淘宝</p>
        </div>
        <div className='icon-img'>
          <img src={pictureDate.weChatStore}/>
          <p>微信</p>
        </div>
        <div className='icon-img'>
          <img src={pictureDate.webo01}/>
          <p>微博</p>
        </div>
      </div>
    );
  }
}
