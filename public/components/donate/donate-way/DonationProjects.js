import {Component} from 'react';

export default class DonationProjects extends Component {
  render() {
    return (
      <div id="donateitems">
        <h3>募捐项目</h3>
        <p>直接通过乐捐捐款</p>
        <div>
          <img src='./public/images/donate/wechat01.png' className='no-hover'/>
          <span className='span'>腾讯</span>
        </div>
      </div>
    );
  }
}