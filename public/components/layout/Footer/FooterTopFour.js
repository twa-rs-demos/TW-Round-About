import {Component} from 'react';

export default class FooterTopFour extends Component {
  render() {
    return (
      <div>
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
