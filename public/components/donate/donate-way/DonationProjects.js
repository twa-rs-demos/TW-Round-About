import {Component} from 'react';

export default class DonationProjects extends Component {
  render() {
    return (
      <div id='donateProjects' className='donate'>
        <h3>募捐项目</h3>
        <p className='middle-describe donate-projects-tect'>直接通过乐捐捐款</p>
        <div className='wechat-image'>
          <img src='http://localhost/tw-ra/public/images/donate/wechat01.png' className='donateProjects-wechat'/>
          <div className='span'>腾讯</div>
        </div>
      </div>
    );
  }
}
