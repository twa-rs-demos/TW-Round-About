import {Component} from 'react';

export default class FooterTopFour extends Component {
  render() {
    return (
      <div className='col-md-offset-1 col-md-10 col-xs-12 no-padding icon-imgs'>
        <div className='icon-img'>
          <img src='http://localhost/tw-ra/public/images/home/taobao store.png'/>
          <p>淘宝</p>
        </div>
        <div className='icon-img'>
          <img src='http://localhost/tw-ra/public/images/home/wechat store.png'/>
          <p>微信</p>
        </div>
        <div className='icon-img'>
          <img src='http://localhost/tw-ra/public/images/home/Weibo01.png'/>
          <p>微博</p>
        </div>
      </div>
    );
  }
}
